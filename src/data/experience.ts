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
      'Built a self-service multi-agent orchestration platform that lets developers delegate complex debugging tasks to specialized agents.',
      'Shipped MCP-powered support automation that turns CRM tickets and similar JIRA history into investigation docs for support engineers.',
      'Designed the internal MCP server (Salesforce, JIRA, S3) with OAuth 2.0 / Okta auth, now the standard way agents connect to enterprise systems.',
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
      'Automated AWS (EC2, S3) provisioning with Terraform-driven ServiceNow workflows, now handling 90% of requests.',
      'Built Okta-ServiceNow onboarding and offboarding automation covering 95% of provisioning requests.',
      "Turned support engineers' pain points into automations and ran enablement sessions, cutting manual effort by 80%.",
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
    highlights: ['Integrated VersionOne and JIRA to automate request tracking, reducing manually submitted requests by 85%.'],
    tech: ['JavaScript', 'ServiceNow', 'REST APIs'],
  },
];
