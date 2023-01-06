const works: IWork[] = [
  {
    id: 'ng-components',
    title: 'Angular Components',
    technologies: ['Angular', 'Bootstrap'],
    screenshots: ['/assets/screenshots/ng-components.png'],
    place: 'Skandinaviska Enskilda Banken ab',
    url: 'https://sebgroup.github.io/ng-components/',
    githubUrl: 'https://github.com/sebgroup/ng-components/',
    description:
      "SEB's open-source Angular component library. The library consists of ready-to-use Angular components which are developed based on SEB's design guidelines.",
  },
  {
    id: 'burberry-clone',
    title: 'Burberry Clone',
    technologies: ['React', 'Framer Motion', 'TailwindCSS'],
    screenshots: [
      '/assets/screenshots/burberry.png',
      '/assets/screenshots/burberry-mobile-1.jpg',
      '/assets/screenshots/burberry-mobile-2.jpg',
    ],
    place: 'Personal Project',
    url: 'https://burberry.netlify.app/',
    githubUrl: 'https://github.com/sjkayle/burberry-clone',
    description:
      'This application is a simple static clone of the landing page of the Burberry Malaysia website. I started this project in order for me to learn how to implement Framer Motion, an animation library for React that I recently discovered, in my future projects. I tried to mimic the animations and gesture behaviour from the original page as closely as possible.',
  },
  {
    id: 'portfolio',
    title: 'Spotify Portfolio',
    technologies: ['Next.js', 'TailwindCSS', 'Typescript'],
    screenshots: [
      '/assets/screenshots/portfolio.png',
      '/assets/screenshots/portfolio-mobile-1.jpg',
      '/assets/screenshots/portfolio-mobile-2.jpg',
    ],
    place: 'Personal Project',
    url: 'https://sjkayle.vercel.app/',
    githubUrl: 'https://github.com/sjkayle/portfolio-v1',
    description:
      "First iteration of my personal website. I got the idea to create a website based on the Spotify's app design when I read an article on Linkedin about a student who created a Spotify-themed resume. Being that Spotify is probably my most used application - and I am a huge fan of the app's aesthetics - I just went for it. This is my first attempt at using TailwindCSS and I had a lot of fun developing this portfolio.",
  },
  {
    id: 'eskin-travel',
    title: 'eSkin Travel',
    technologies: ['Next.js', 'Redux', 'Redux Form', 'Bootstrap'],
    screenshots: [
      '/assets/screenshots/eskin-travel.png',
      '/assets/screenshots/eskin-mobile-1.jpg',
      '/assets/screenshots/eskin-mobile-2.jpg',
    ],
    place: 'AXA Affin Malaysia',
    url: 'https://digital.axa.com.my/travel-insurance-malaysia/',
    description:
      'A single page web application for allowing the customers of AXA Malaysia to view and purchase different travel insurance products. The application is built using Next.js and is integrated with RESTful API services to retrieve different quotation data that are displayed in the UI.',
  },
  {
    id: 'react-components',
    title: 'React Components',
    technologies: ['Gatsby.js', 'React', 'Bootstrap', 'Typescript'],
    screenshots: ['/assets/screenshots/react-components.png'],
    place: 'Skandinaviska Enskilda Banken ab',
    url: 'https://sebgroup.github.io/react-components/',
    githubUrl: 'https://github.com/sebgroup/react-components/',
    description:
      "SEB's open-source React component library. The library consists of ready-to-use React components which are developed based on SEB's design guidelines.",
  },
  {
    id: 'green',
    title: 'Green Design',
    technologies: ['Sass', 'Angular', 'React', 'Storybook'],
    screenshots: ['/assets/screenshots/green.png'],
    place: 'Skandinaviska Enskilda Banken ab',
    url: 'https://sebgroup.github.io/green/latest/chlorophyll/',
    githubUrl: 'https://github.com/sebgroup/green',
    description:
      'Green is an opinionated design system for building content and functionality for SEB. It builds on a set of principles and techniques aimed at maximizing code quality, code reuse, consistency and collaboration.',
  },
  {
    id: 'pension-calculator',
    title: 'Pension Calculator',
    technologies: ['Angular', 'SEB ng-components'],
    screenshots: ['/assets/screenshots/pension-calculator.png'],
    place: 'Skandinaviska Enskilda Banken ab',
    url: 'https://seb.se/privat/pension-och-forsakring/pensionsspara/privat-pensionssparande',
    description:
      "A microfrontend application onboarded onto SEB's website. This pension calculator application serves as a playground for SEB's customers, where they can see their expected pension payouts based on their age, salary, savings, etc.",
  },
  {
    id: 'estore',
    title: 'eStore: AXA Rewards',
    technologies: ['Webflow', 'Typescript', 'Stimulus.js (DOM manipulation)', 'Auth0'],
    screenshots: [
      '/assets/screenshots/estore.png',
      '/assets/screenshots/estore-mobile-1.jpg',
      '/assets/screenshots/estore-mobile-2.jpg',
    ],
    place: 'AXA Affin Malaysia',
    url: 'https://www.axarewards.com.my/',
    description:
      'eStore is a website for AXA Malaysia not only to showcase their different insurance products, but also to provide their customers with different sales promotions and offers, know-how articles, and more. Customers can register in order to participate in a wide variety of engagement activities, manage their account to increase their membership level, set personal reminders regarding their insurance, and enjoy rewards by AXA.',
  },
];

export default works;
