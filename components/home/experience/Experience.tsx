import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "EnBW Energie Baden-Württemberg AG (via Ishango AI)",
    position: "L3 MLOps Engineer",
    time: "Dec 2024 - Present",
    location: "Karlsruhe, Germany (Remote)",
    description:
      "Supporting enterprise-scale MLOps initiatives for a leading European energy provider. Focusing on production ML infrastructure, deployment pipelines, and operational reliability in regulated, high-availability environments.",
    tech: [
      "MLOps",
      "Python",
      "Docker",
      "CI/CD",
      "Model Deployment",
      "Monitoring",
      "Enterprise ML",
    ],
  },
  {
    title: "Noeud",
    position: "Founding Machine Learning Engineer (R&D)",
    time: "Oct 2024 - Present",
    location: "Accra, Ghana (Part-Time Remote)",
    description:
      "Leading research and prototyping of real-time financial forecasting systems using Temporal Fusion Transformers and deep time-series models. Designing end-to-end pipelines from data ingestion to deployment for live market prediction systems.",
    tech: [
      "PyTorch",
      "Time-Series Forecasting",
      "Transformers",
      "Python",
      "FastAPI",
      "ML Pipelines",
      "Quantitative Finance",
    ],
  },
  {
    title: "MinoHealth AI Labs",
    position: "Machine Learning Engineer",
    time: "Oct 2024 - Dec 2024",
    location: "Accra, Ghana",
    description:
      "Built Moremi Deep Research Agent (RACE score 46.3, ranked 3/18 on DeepResearch Bench). Engineered Moremi Bio Co-Researcher, AI Agent, and Search systems deployed in production. Architected autonomous agent technology behind 4 co-authored 2025 research publications.",
    tech: [
      "Python",
      "LLMs",
      "Agentic AI",
      "Docker",
      "FastAPI",
      "Celery",
      "RabbitMQ",
      "Redis",
      "React",
      "3Dmol.js",
    ],
  },
  {
    title: "KaraAgro AI",
    position: "AI Engineer & Drone Mapping",
    time: "Jan 2024 - Dec 2024",
    location: "Accra, Ghana (Part-Time Contract)",
    description:
      "Deployed YOLOv12 computer vision model for cashew stress detection across 42 farms in 28 communities as part of GIZ, MOVE, and FAIR FORWARD funded CADI AI pilot. Led end-to-end drone mapping operations, collecting and annotating 148GB agricultural dataset.",
    tech: [
      "YOLO",
      "Computer Vision",
      "Python",
      "PyTorch",
      "Roboflow",
      "Drone Mapping",
      "Agricultural AI",
    ],
  },
  {
    title: "Runmila AI Institute",
    position: "AI Instructor",
    time: "Jul 2024 - Sep 2024",
    location: "Remote (Contract)",
    description:
      "Delivered the 2024 Generative AI & Python Summer Camp for students from Montserrat, Grenada, and Dominica. Taught hands-on sessions on Python programming, large language models, vision-language models, and AI agents.",
    tech: [
      "Python",
      "LLMs",
      "Vision-Language Models",
      "AI Agents",
      "Teaching",
      "Curriculum Development",
    ],
  },
];
