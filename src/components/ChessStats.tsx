"use client";

import { useEffect, useState } from "react";

type RatingStat = {
  last?: { rating?: number; date?: number };
  best?: { rating?: number; date?: number };
  record?: { win?: number; loss?: number; draw?: number };
};

type PlayerStats = {
  chess_rapid?: RatingStat;
  chess_blitz?: RatingStat;
  chess_bullet?: RatingStat;
  chess_daily?: RatingStat;
  tactics?: { highest?: { rating?: number }; lowest?: { rating?: number } };
  puzzle_rush?: { best?: { total_attempts?: number; score?: number } };
};

const modes: { key: keyof PlayerStats; label: string }[] = [
  { key: "chess_rapid", label: "Rapid" },
  { key: "chess_blitz", label: "Blitz" },
  { key: "chess_bullet", label: "Bullet" },
  { key: "chess_daily", label: "Daily" },
];

export function ChessStats() {
  const [stats, setStats] = useState<PlayerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("https://api.chess.com/pub/player/saurabhp12/stats")
      .then((response) => {
        if (!response.ok) throw new Error("Chess.com stats unavailable");
        return response.json();
      })
      .then((data: PlayerStats) => {
        if (active) setStats(data);
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  return (
    <div className="chess-stats">
      <div className="chess-stats-heading">
        <div>
          <p className="eyebrow">Chess.com profile</p>
          <h3>@saurabhp12</h3>
        </div>
        <a className="text-link" href="https://www.chess.com/member/saurabhp12" target="_blank" rel="noreferrer">View profile ↗</a>
      </div>
      {loading && <p className="chess-stats-message">Loading live Chess.com ratings…</p>}
      {error && <p className="chess-stats-message">Live ratings couldn't be loaded right now. Visit my Chess.com profile for the latest stats.</p>}
      {stats && (
        <>
          <div className="chess-rating-grid">
            {modes.map(({ key, label }) => {
              const mode = stats[key] as RatingStat | undefined;
              if (!mode?.last?.rating) return null;
              return (
                <article className="chess-rating-card" key={key}>
                  <span>{label}</span>
                  <strong>{mode.last.rating.toLocaleString("en-US")}</strong>
                  {mode.best?.rating && <small>Peak {mode.best.rating.toLocaleString("en-US")}</small>}
                  {mode.record && <small>{mode.record.win ?? 0}W · {mode.record.draw ?? 0}D · {mode.record.loss ?? 0}L</small>}
                </article>
              );
            })}
          </div>
          <p className="chess-attribution">Ratings and records are fetched from the public Chess.com Published-Data API.</p>
        </>
      )}
    </div>
  );
}
