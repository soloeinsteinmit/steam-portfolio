import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Solomon Eshun | AI/ML Engineer & MLOps Specialist</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Solomon Eshun (Solo Shun) - AI/ML Engineer specializing in autonomous AI agents, MLOps, deep learning, and production-scale ML systems. Building the future of AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI Engineer, Machine Learning, MLOps, Deep Learning, PyTorch, TensorFlow, AI Agents, LLMs, Computer Vision, Solo Shun, Solomon Eshun" />
        <meta name="author" content="Solomon Eshun" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solomoneshun.com/" />
        <meta property="og:title" content="Solomon Eshun | AI/ML Engineer & MLOps Specialist" />
        <meta property="og:description" content="AI/ML Engineer building autonomous research agents and production ML systems. Ranked 3/18 globally on DeepResearch Bench. Expertise in PyTorch, MLOps, and agentic AI." />
        <meta property="og:image" content="https://solomoneshun.com/screenshot.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="https://solomoneshun.com/" />
        <meta name="twitter:title" content="Solomon Eshun | AI/ML Engineer & MLOps Specialist"/>
        <meta name="twitter:description" content="AI/ML Engineer building autonomous research agents and production ML systems. Expertise in PyTorch, MLOps, and agentic AI."/>
        <meta name="twitter:image" content="https://solomoneshun.com/screenshot.png"/>

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://solomoneshun.com/" />
      </Head>
      <Home />
    </>
  );
}
