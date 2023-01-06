interface IExperience {
  id: number;
  position: string;
  company: string;
  imgSrc: string;
  location: string;
  duration: string;
}

interface IWork {
  id: string;
  title: string;
  technologies: string[];
  screenshots: string[];
  place: string;
  url: string;
  githubUrl?: string;
  description: string;
}

interface ISocial {
  id: number;
  icon: import('react-feather').Icon;
  url: string;
  main?: boolean;
}

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;
