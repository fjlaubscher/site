interface ProjectType {
  title: string;
  link: string;
  description: string;
  image: string;
}

interface WorkProjectType {
  name: string;
  description: string;
  tech: string[];
}

interface WorkHistoryType {
  from: string;
  to?: string;
  employer: string;
  location: string;
  role: string;
  projects: WorkProjectType[];
}
