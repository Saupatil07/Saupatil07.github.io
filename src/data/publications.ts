export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  abstract?: string;
  links: { label: string; href: string }[];
};

// Publication metadata cross-checked against the supplied CV and public scholarly records.
// The 2023 workshop paper and 2025 journal article are distinct publications.
export const publications: Publication[] = [
  {
    title: "Latent Neural PDE Solver: a reduced-order modelling framework for partial differential equations",
    authors: "Zijie Li, Saurabh Patil, Francis Ogoke, Dule Shu, Wilson Zhen, Michael Schneier, John R. Buchanan Jr., and Amir Barati Farimani",
    venue: "Journal of Computational Physics, 524, 113705",
    year: "2025",
    type: "Journal article",
    abstract: "A reduced-order modelling framework that learns system dynamics in a mesh-reduced latent space using a nonlinear autoencoder and a temporal prediction model.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1016/j.jcp.2024.113705" },
      { label: "arXiv", href: "https://arxiv.org/abs/2402.17853" },
      { label: "Code", href: "https://github.com/BaratiLab/LNS-Latent-Neural-PDE-Solver" }
    ]
  },
  {
    title: "CaFA: Global Weather Forecasting with Factorized Attention on Sphere",
    authors: "Zijie Li, Anthony Zhou, Saurabh Patil, and Amir Barati Farimani",
    venue: "arXiv:2405.07395",
    year: "2024",
    type: "Preprint",
    abstract: "A factorized-attention model for global weather forecasting on spherical geometries, designed to reduce the computational cost of attention at global scales.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2405.07395" }]
  },
  {
    title: "Hyena Neural Operator for Partial Differential Equations",
    authors: "Saurabh Patil, Zijie Li, and Amir Barati Farimani",
    venue: "APL Machine Learning, 1(4), 046114",
    year: "2023",
    type: "Journal article",
    abstract: "Introduces a neural operator based on Hyena's long convolutions and multiplicative gating, and evaluates it on diffusion–reaction and Navier–Stokes equations.",
    links: [
      { label: "Publisher", href: "https://doi.org/10.1063/5.0177276" },
      { label: "arXiv", href: "https://arxiv.org/abs/2306.16524" },
      { label: "Code", href: "https://github.com/Saupatil07/Hyena-Neural-Operator" }
    ]
  },
  {
    title: "Latent Neural PDE Solver for Time-Dependent Systems",
    authors: "Zijie Li, Saurabh Patil, Dule Shu, and Amir Barati Farimani",
    venue: "NeurIPS 2023 Workshop: AI4Science",
    year: "2023",
    type: "Workshop paper",
    abstract: "Learns time-dependent PDE dynamics in a compressed latent space by first reducing the full-order representation and then predicting future states in that space.",
    links: [
      { label: "OpenReview", href: "https://openreview.net/forum?id=iJfPFUvFfy" },
      { label: "ML Anthology", href: "https://mlanthology.org/neuripsw/2023/li2023neuripsw-latent/" }
    ]
  },
  {
    title: "Forecasting COVID-19 New Cases Using Transformer Deep Learning Model",
    authors: "Saurabh Patil, Parisa Mollaei, and Amir Barati Farimani",
    venue: "medRxiv, 2023.11.02.23297976",
    year: "2023",
    type: "Preprint",
    abstract: "A transformer-based time-series forecasting study of new COVID-19 cases in India, Russia, and Brazil.",
    links: [
      { label: "medRxiv", href: "https://doi.org/10.1101/2023.11.02.23297976" },
      { label: "Code", href: "https://github.com/Saupatil07/Covid-Forecasting-using-deep-learning" }
    ]
  },
  {
    title: "Adversarial Attacks Against 3D Point Clouds",
    authors: "Hemant Kumar Sharma, Saurabh Patil, and Akshay Antony",
    venue: "NeurIPS 2022 course project report",
    year: "2022",
    type: "Technical report",
    abstract: "An investigation of adversarial attacks on PointNet and DGCNN for 3D point-cloud classification using the ModelNet40 dataset.",
    links: [{ label: "Project report (PDF)", href: "https://saupatil07.github.io/data/TAI_Final_Report-1.pdf" }]
  }
];
