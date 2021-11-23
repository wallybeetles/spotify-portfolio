import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';
import { useInView } from 'react-intersection-observer';

import useDisplayNavbar from '../hooks/useDisplayNavbar';

import Button from '../components/button';
import ControlPanel from '../components/control-panel';
import ExperienceList from '../components/experience-list';
import Navbar from '../components/navbar';
import Section, { SectionTitle } from '../components/section';
import Main from '../components/layouts/main';
import WorksFlexbox from '../components/works-flexbox';
import WorksGrid from '../components/works-grid';
import Hero from '../components/hero';
import Body from '../components/body';

const Home: NextPage = () => {
  const { ref, inView } = useInView();
  const isNavbarDisplayed = useDisplayNavbar(inView);

  return (
    <Main pageBackground='purpleGradient' pageTitle='Kayle San Juan'>
      <Navbar
        text='Kayle San Juan'
        hideOnTop
        sendMailIcon
        isVisible={isNavbarDisplayed}
      />

      <Hero />

      <Body>
        <div ref={ref}>
          <ControlPanel />
        </div>

        <Section>
          <SectionTitle title='Experience' />
          <ExperienceList />
        </Section>

        <Section>
          <div className='flex md:justify-between items-center'>
            <SectionTitle title='Works' />
            <Link href='/works' passHref>
              <a className='hidden md:block text-xs tracking-wider font-semibold uppercase hover:underline '>
                See library
              </a>
            </Link>
          </div>
          <div className='md:hidden'>
            <WorksFlexbox />
          </div>
          <div className='hidden md:block'>
            <WorksGrid isOneRow />
          </div>
          <div className='mt-3 md:hidden justify-center flex'>
            <Link href='/works' passHref>
              <a>
                <Button round>See library</Button>
              </a>
            </Link>
          </div>
        </Section>

        <Section>
          <SectionTitle title='About' />
          <div className='grid grid-cols-5 text-white font-light'>
            <div className='relative col-span-5 xl:col-span-4 h-96 p-5 pb-7 md:p-10 rounded-md flex flex-col justify-end overflow-hidden bg-gradient-to-t from-gray-300 to-gray-200'>
              <div className='z-10'>
                <div className='text-xl md:text-3xl'>
                  Hello. My name is{' '}
                  <span className='font-extrabold text-2xl md:text-4xl'>
                    Kayle.
                  </span>
                </div>

                <div className='mt-5 mb-8 text-base md:text-lg'>
                  I am a software engineer specializing in building web
                  applications using React. Currently, I am working for{' '}
                  <span className='font-extrabold'>AXA Affin Malaysia</span>{' '}
                  under R Systems Sdn. Bhd. in Kuala Lumpur.
                </div>

                <Link href='/profile' passHref>
                  <a className='group text-xs md:text-sm group-hover:text-white flex items-center justify-start w-max tracking-wider font-semibold uppercase group-hover:underline'>
                    <span className='tracking-wider font-semibold uppercase group-hover:underline'>
                      See more
                    </span>
                    <span className='ml-2 transition duration-200 transform group-hover:translate-x-1.5'>
                      <ArrowRight size={18} strokeWidth={1} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </Body>
    </Main>
  );
};

export default Home;
