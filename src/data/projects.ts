export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  status: string;
  methods: string[];
  highlights: string[];
  image: string;
  links: { label: string; href: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "image-geolocalization",
    title: "Image Geolocalization",
    category: "Computer Vision · Geospatial AI",
    summary: "Learning visual representations to estimate where a photograph was captured.",
    description:
      "A research direction focused on image-to-location retrieval and geographic reasoning. The system explores image–GPS representation learning, large-scale visual retrieval, and candidate reranking.",
    status: "Research direction",
    methods: ["Vision encoders", "Image–GPS contrastive learning", "Geospatial embeddings", "FAISS retrieval", "Candidate reranking"],
    highlights: [
      "Exploring pretrained vision encoders for image–location representation learning.",
      "Building large-scale image and GPS retrieval pipelines.",
      "Evaluating retrieval quality across geographic distance thresholds.",
    ],
    image: "/images/geolocalization.svg",
    links: [],
    featured: true,
  },
  {
    slug: "visual-place-recognition",
    title: "Visual Place Recognition",
    category: "Computer Vision · Visual Retrieval",
    summary: "Recognizing places across viewpoint changes and challenging indoor environments.",
    description:
      "Work on visual place recognition with an emphasis on indoor environments, scalable dataset preparation, and global image descriptors. The project explores adapting retrieval recipes to large collections of indoor scans.",
    status: "Research direction",
    methods: ["Visual place recognition", "Global descriptors", "SALAD", "Matterport data", "Large-scale evaluation"],
    highlights: [
      "Preparing an indoor VPR dataset from Matterport-style panoramic captures.",
      "Investigating descriptor learning and retrieval for indoor environments.",
      "Designing geographically and spatially meaningful evaluation splits.",
    ],
    image: "/images/vpr.svg",
    links: [],
    featured: true,
  },
  {
    slug: "multimodal-geolocation",
    title: "Multimodal Geolocation and Reranking",
    category: "Multimodal AI · Retrieval",
    summary: "Combining visual embeddings and contextual reasoning to improve location candidates.",
    description:
      "An exploration of using vision-language models alongside image encoders for candidate-level reasoning. The goal is to assess whether contextual visual understanding can improve a first-stage geographic retrieval system.",
    status: "Exploration",
    methods: ["Vision-language models", "Embedding retrieval", "Reranking", "Candidate scoring", "Ablation studies"],
    highlights: [
      "Investigating VLM-assisted reranking of top-k geographic candidates.",
      "Comparing first-stage retrieval with refined candidate predictions.",
      "Studying probability calibration and distance-aware evaluation.",
    ],
    image: "/images/multimodal.svg",
    links: [],
    featured: true,
  },
  {
    slug: "deepfake-detection",
    title: "AI-Generated Image and Deepfake Detection",
    category: "Trust & Safety · Computer Vision",
    summary: "A planned detection platform for AI-generated imagery and face manipulation.",
    description:
      "A product-oriented research initiative exploring detection of AI-generated images and face manipulation using pretrained vision encoders, task-specific training, and a measurable evaluation pipeline.",
    status: "Product exploration",
    methods: ["Visual forensics", "Pretrained vision encoders", "Binary classification", "Robustness evaluation", "API design"],
    highlights: [
      "Defining separate detection tasks for generated images and face manipulation.",
      "Planning dataset curation, provenance tracking, and evaluation protocols.",
      "Exploring a web experience and API for model inference.",
    ],
    image: "/images/deepfake.svg",
    links: [],
    featured: true,
  },
  {
    slug: "vehicle-recognition",
    title: "Vehicle Make, Model and Year Recognition",
    category: "Fine-Grained Visual Recognition",
    summary: "Fine-grained vehicle recognition from large-scale image collections.",
    description:
      "A computer vision direction focused on identifying vehicle attributes such as make, model, and year. The work involves large-scale image data, data quality, and fine-grained visual classification.",
    status: "Research / engineering",
    methods: ["Fine-grained recognition", "Vision models", "Dataset curation", "Classification", "Evaluation"],
    highlights: [
      "Working with large image collections for vehicle recognition.",
      "Considering label quality and class imbalance in dataset preparation.",
      "Evaluating fine-grained attribute prediction.",
    ],
    image: "/images/vehicle.svg",
    links: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
