// Personal Information
export const personalInfo = {
  name: 'Sean Lyons',
  title: 'Polyglot Software Leader',
};

// Social/Professional Links
export const links = {
  github: {
    url: 'https://github.com/lyonssp',
    label: 'GitHub',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/lyonssp',
    label: 'LinkedIn',
  },
  resume: {
    url: 'https://github.com/lyonssp/resume/blob/master/resume.pdf',
    label: 'Resume',
  },
};

// Tech Radar - ThoughtWorks style
// Rings: Adopt (use confidently), Trial (use with caution), Assess (explore), Hold (proceed with caution)
// Quadrants: Languages & Frameworks, Tools, Platforms, Techniques

export interface RadarItem {
  name: string;
  ring: 'adopt' | 'trial' | 'assess' | 'hold';
  quadrant: 'languages' | 'tools' | 'platforms' | 'techniques';
  description?: string;
}

export const techRadar: RadarItem[] = [
  // Languages & Frameworks - ADOPT
  { name: 'Golang', ring: 'adopt', quadrant: 'languages' },
  { name: 'Python', ring: 'adopt', quadrant: 'languages' },
  { name: 'TypeScript', ring: 'adopt', quadrant: 'languages' },
  { name: 'React', ring: 'adopt', quadrant: 'languages' },
  { name: 'Haskell', ring: 'adopt', quadrant: 'languages' },

  // Languages & Frameworks - TRIAL
  { name: 'NumPy', ring: 'trial', quadrant: 'languages' },
  { name: 'PyTorch', ring: 'trial', quadrant: 'languages' },
  { name: 'Pandas', ring: 'trial', quadrant: 'languages' },

  // Tools - ADOPT
  { name: 'Kubernetes', ring: 'adopt', quadrant: 'tools' },
  { name: 'Prometheus', ring: 'adopt', quadrant: 'tools' },
  { name: 'Terraform', ring: 'adopt', quadrant: 'tools' },
  { name: 'PostgreSQL', ring: 'adopt', quadrant: 'tools' },

  // Tools - TRIAL
  { name: 'MongoDB', ring: 'trial', quadrant: 'tools' },
  { name: 'Elasticsearch', ring: 'trial', quadrant: 'tools' },

  // Platforms - ADOPT
  { name: 'AWS', ring: 'adopt', quadrant: 'platforms' },
  { name: 'Linux', ring: 'adopt', quadrant: 'platforms' },

  // Platforms - TRIAL
  { name: 'Kafka', ring: 'trial', quadrant: 'platforms' },

  // Techniques - ADOPT
  { name: 'System Design', ring: 'adopt', quadrant: 'techniques' },
  { name: 'CI/CD', ring: 'adopt', quadrant: 'techniques' },
  { name: 'Distributed Systems', ring: 'adopt', quadrant: 'techniques' },
  { name: 'Operational Excellence', ring: 'adopt', quadrant: 'techniques' },

  // Techniques - TRIAL
  { name: 'Machine Learning', ring: 'trial', quadrant: 'techniques' },
  { name: 'Generative AI', ring: 'trial', quadrant: 'techniques' },
  { name: 'LLM Fine-tuning', ring: 'trial', quadrant: 'techniques' },

  // Techniques - ASSESS
  { name: 'Reinforcement Learning', ring: 'assess', quadrant: 'techniques' },
];
