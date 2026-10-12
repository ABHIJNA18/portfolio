// Things you've built. Leave a link as '' to hide it.
// Next to the title you can show a logo (image URL or imported image) or, if there's no logo, an emoji.

import type { ImageMetadata } from 'astro';
import striveAILogo from '../assets/striveAI.webp';

export type Project = {
  title: string;
  logo?: string | ImageMetadata;
  emoji?: string;
  description: string;
  tech: string[];
  status?: 'live' | 'in-progress';
  links: { code?: string; live?: string };
};

export const projects: Project[] = [
  {
    title: 'StriveAI',
    logo: striveAILogo,
    description:
      'An AI running coach, built and deployed end to end. A Go backend ingests Strava activity and training-load data in real time via webhooks; a Python AI service turns it into coaching insights over gRPC.',
    tech: ['Go', 'Python', 'gRPC', 'PostgreSQL', 'OpenAI API', 'Docker', 'Railway'],
    links: {
      code: 'https://github.com/ABHIJNA18/strava-ai-coach',
    },
  },
  {
    title: 'Tech Docs Research Assistant',
    emoji: '📄',
    description:
      'An evidence-grounded RAG assistant for technical documentation. It combines hybrid search (semantic + BM25), cross-encoder reranking, and enforced citations, with a Ragas evaluation pipeline in CI to catch regressions.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'BM25', 'Ragas', 'OpenAI API'],
    status: 'in-progress',
    links: { code: '', live: '' },
  },
];
