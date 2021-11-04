const works: IWork[] = [
  {
    id: 1,
    title: 'AXA eSkin Travel',
    technologies: ['Next.js', 'Redux', 'Redux Form', 'Bootstrap'],
    screenshots: [
      '/assets/eskin-travel.png',
      '/assets/eskin-mobile-1.jpg',
      '/assets/eskin-mobile-2.jpg',
    ],
    place: 'AXA Affin Malaysia',
    url: 'https://digital.axa.com.my/travel-insurance-malaysia/',
    description:
      'A single page web application for allowing the customers of AXA Malaysia to view and purchase different travel insurance products. The application is built using Next.js and is integrated with RESTful API services to retrieve different quotation data that are displayed in the UI.',
  },
  {
    id: 2,
    title: 'Spotify Portfolio',
    technologies: ['Next.js', 'TailwindCSS', 'Typescript'],
    screenshots: [
      '/assets/portfolio.png',
      '/assets/portfolio-mobile-1.jpg',
      '/assets/portfolio-mobile-2.jpg',
    ],
    place: 'Personal Project',
    url: 'https://sjkayle.vercel.app/',
    githubUrl: 'https://github.com/sjkayle/portfolio-v1',
    description: `First iteration of my personal website. I got the idea to create a website based on Spotify's App design when I read an article on Linkedin about a student who created a Spotify-themed resume. Being that Spotify is probably my most used application - and I am a huge fan of the app's aesthetics - I just went for it. This is my first attempt at using TailwindCSS and I had a lot of fun developing this portfolio.`,
  },
  {
    id: 3,
    title: 'eStore: AXA Rewards',
    technologies: [
      'Webflow',
      'Typescript',
      'Stimulus.js (DOM manipulation)',
      'Auth0',
    ],
    screenshots: [
      '/assets/estore.png',
      '/assets/estore-mobile-1.jpg',
      '/assets/estore-mobile-2.jpg',
    ],
    place: 'AXA Affin Malaysia',
    url: 'https://www.axarewards.com.my/',
    description:
      'eStore is a website for AXA Malaysia not only to showcase their different insurance products, but also to provide their customers with different sales promotions and offers, know-how articles, and more. Customers can register in order to participate in a wide variety of engagement activities, manage their account to increase their membership level, set personal reminders regarding their insurance, and enjoy rewards by AXA.',
  },
];

export default works;
