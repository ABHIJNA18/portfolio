// Your work history, newest first. Keep highlights to one line each.

export type Job = {
  role: string;
  company: string;
  url?: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    role: 'Software Engineer',
    company: 'Infoblox',
    url: 'https://www.infoblox.com',
    start: 'Apr 2025',
    end: 'May 2026',
    location: 'Bengaluru, India',
    highlights: [
      'Built a self-service multi-agent orchestration platform for delegating complex debugging tasks — cut manual debugging effort by 60%.',
      'Shipped MCP-powered support automation that turns CRM tickets and similar JIRA history into investigation docs — 40% faster issue resolution.',
      'Designed the internal MCP server (Salesforce, JIRA, S3) with OAuth 2.0 / Okta auth — now the standard way agents connect to enterprise systems.',
    ],
    tech: ['Python', 'FastMCP', 'AutoGen', 'LiteLLM', 'Azure OpenAI', 'Docker', 'MongoDB'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Infoblox',
    url: 'https://www.infoblox.com',
    start: 'Jul 2022',
    end: 'Mar 2025',
    location: 'Bengaluru, India',
    highlights: [
      'Automated AWS (EC2, S3) provisioning with Terraform-driven ServiceNow workflows — 90% of requests now go through automation.',
      'Built Okta–ServiceNow onboarding and offboarding automation covering 95% of provisioning requests.',
      'Turned support engineers’ pain points into automations and ran enablement sessions — 80% less manual effort.',
    ],
    tech: ['JavaScript', 'ServiceNow', 'REST APIs', 'Terraform', 'AWS', 'GitHub APIs', 'Okta'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Infoblox',
    url: 'https://www.infoblox.com',
    start: 'Jan 2022',
    end: 'Jun 2022',
    location: 'Bengaluru, India',
    highlights: ['Integrated VersionOne and JIRA to automate request tracking — 85% fewer manually submitted requests.'],
    tech: ['JavaScript', 'ServiceNow', 'REST APIs'],
  },
];
