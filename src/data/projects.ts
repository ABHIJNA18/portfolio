// Things you've built. Leave a link as '' to hide it.
// Next to the title you can show a logo (image URL) or, if there's no logo, an emoji.

export type Project = {
  title: string;
  logo?: string;
  emoji?: string;
  description: string;
  tech: string[];
  status?: 'live' | 'in-progress';
  links: { code?: string; live?: string };
};

export const projects: Project[] = [
  {
    title: 'StriveAI',
    logo: 'https://go-service-production-eace.up.railway.app/striveAI.png',
    description:
      'An AI running coach, built and deployed end to end. A Go backend ingests Strava activity and training-load data in real time via webhooks; a Python AI service turns it into coaching insights over gRPC.',
    tech: ['Go', 'Python', 'gRPC', 'PostgreSQL', 'OpenAI API', 'Docker', 'Railway'],
    status: 'live',
    links: {
      live: 'https://go-service-production-eace.up.railway.app',
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
