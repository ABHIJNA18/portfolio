// Degrees, newest first.

export type Degree = {
  degree: string;
  school: string;
  url?: string;
  location?: string;
  start: string;
  end: string;
  details: string[];
};

export const education: Degree[] = [
  {
    degree: 'B.Tech in Electronics and Communication',
    school: 'PES University',
    url: 'https://pes.edu',
    location: 'Bengaluru, India',
    start: '2018',
    end: '2022',
    details: ['Minor in Computer Science and Engineering'],
  },
];
