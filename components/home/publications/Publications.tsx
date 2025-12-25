import { SectionHeader } from "@/components/utils/SectionHeader";
import { PublicationItem } from "./PublicationItem";

export const Publications = () => {
  return (
    <section className="section-wrapper" id="publications">
      <SectionHeader title="Publications" dir="r" />
      {publications.map((item) => (
        <PublicationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const publications = [
  {
    title: "Moremi Bio Agent: Using Neisseria meningitidis Reference Data For The Double Blinded Validation of A General Purpose Biology-Trained Reasoning Model for Pathogen and Antigen Discovery",
    authors: "Co-Authored",
    journal: "Submitted for review",
    year: "2025",
    link: "#",
    collaboration: "Imperial College London, Infectious Disease, London, UK",
    description:
      "Collaborative research with Imperial College London on pathogen and antigen discovery using biology-trained reasoning models.",
  },
  {
    title: "Moremi Bio Agent: Leveraging Agentic Large Language Model for the Discovery of Broad-Spectrum Antibiotics for Enterobacteriaceae",
    authors: "Co-Authored",
    journal: "bioRxiv",
    year: "2025",
    link: "https://www.biorxiv.org/content/10.1101/2025.08.21.671656v1",
    doi: "10.1101/2025.08.21.671656",
    description:
      "Research on leveraging agentic LLMs for discovering broad-spectrum antibiotics targeting Enterobacteriaceae.",
  },
  {
    title: "Can Large Language Models Design Biological Weapons? Evaluating Moremi Bio",
    authors: "Co-Authored",
    journal: "arXiv",
    year: "2025",
    link: "https://arxiv.org/abs/2505.17154",
    arxiv: "2505.17154",
    description:
      "Biosecurity evaluation of foundation models and their potential risks in biological weapon design.",
  },
  {
    title: "Moremi Bio Agent: Application of A Foundation Model and End-to-End Automation in the Design and Validation of Monoclonal Antibodies Targeting Plasmodium falciparum Invasion Complex",
    authors: "Co-Authored",
    journal: "bioRxiv",
    year: "2025",
    link: "https://www.biorxiv.org/content/10.1101/2025.02.12.637967v1",
    doi: "10.1101/2025.02.12.637967",
    collaboration: "West African Centre for Cell Biology of Infectious Pathogens (WACCBIP), University of Ghana, Accra",
    description:
      "Research on AI-driven design and validation of monoclonal antibodies for malaria treatment.",
  },
];

