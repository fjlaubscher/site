declare namespace Site {
  interface Image {
    jpg: string;
    webp: string;
  }

  interface ShowcaseProject {
    title: string;
    link: string;
    description: string;
    image: Image;
  }

  interface WorkProject {
    name: string;
    description: string;
    tech: string[];
  }

  interface WorkHistory {
    from: string;
    to?: string;
    employer: string;
    location: string;
    role: string;
    projects: WorkProject[];
  }

  interface ContactForm {
    name: string;
    email: string;
    query: string;
  }
}
