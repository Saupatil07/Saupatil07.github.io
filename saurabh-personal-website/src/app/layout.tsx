import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

const siteUrl = "https://saupatil07.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Research Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: "Personal research website of Saurabh Patil, covering computer vision, visual intelligence, image geolocalization, and multimodal AI.",
  openGraph: {
    title: `${profile.name} | Research Engineer`,
    description: "Research in computer vision, visual intelligence, and multimodal AI.",
    url: siteUrl,
    siteName: profile.name,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
