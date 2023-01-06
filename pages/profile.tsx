import type { NextPage } from 'next';
import { Play } from 'react-feather';

import Body from '../components/content/body';
import Section, { SectionTitle } from '../components/content/section';
import Main from '../components/layouts/main';
import { ProfileHero } from '../components/hero';
import ControlPanel from '../components/control-panel';

const Profile: NextPage = () => {
  const technologies = ['Javascript (ES6+)', 'Typescript', 'React', 'Angular 2+', 'Sass'];

  return (
    <Main pageBackground="gray" pageTitle="Profile">
      <ProfileHero />
      <Body>
        <ControlPanel />
        <Section>
          <SectionTitle title="About me" />
          <p className="text-base">
            Hello! I&apos;m Kayle and I am a self-taught front-end developer. My interest in UI development started back
            in 2019 during my first job. I was given a task to create a simple static page in HTML &amp; CSS. Turns out,
            I am a person who enjoys writing code to create aesthetically pleasing user interfaces. From there, I found
            myself learning about different concepts in front-end development.
            <div className="mt-4">
              Fast-forward to today, I have the privilege of working as a front-end developer for SEB where I have been
              building accessible, responsive websites and digital experiences.
            </div>
            <div className="mt-4">Here are a few technologies I have been working with recently:</div>
            <ul className="lg:w-1/2 mt-4 text-sm grid grid-cols-2 grid-flow-col grid-rows-3">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center mb-1">
                  <Play className="w-2 h-2 text-green-spotify" />
                  <span className="ml-2">{tech}</span>
                </li>
              ))}
            </ul>
          </p>
        </Section>
      </Body>
    </Main>
  );
};

export default Profile;
