import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import Badge from '../../components/badge';
import Body from '../../components/body';
import Navbar from '../../components/navbar';
import { WorkControlPanel } from '../../components/control-panel';
import { WorkHero } from '../../components/hero';
import Section, { SectionTitle } from '../../components/section';
import Main from '../../components/layouts/main';

import works from '../../data/works';

const Work: NextPage<WorkProps> = ({ work }) => {
  const { ref, inView } = useInView();

  return (
    <Main pageBackground='purpleGradient' pageTitle={work.title}>
      <Navbar text={work.title} hideOnTop isVisible={!inView} />

      <div ref={ref}>
        <WorkHero place={work.place} title={work.title} />
      </div>

      <Body>
        <WorkControlPanel url={work.url} githubUrl={work.githubUrl || ''} />

        <Section>
          <SectionTitle title='About' />
          <div className='text-base'>{work.description}</div>
          <div className='mt-6 flex flex-wrap gap-2'>
            {work.technologies.map((tech: string, index: number) => (
              <div key={index}>
                <Badge text={tech} />
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle title='Some screenshots' />
          <div className='grid grid-cols-2 grid-rows-3 gap-4 md:gap-6 xl:w-3/4'>
            {work.screenshots.map((screenshot: string, index: number) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? 'h-96 col-span-2'
                    : 'col-span-2 md:col-span-1 md:row-span-2'
                } relative rounded-lg overflow-hidden transform hover:scale-101 focus:scale-101 transition duration-200`}
              >
                <Image
                  src={screenshot}
                  alt={`screenshot-${index + 1}`}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='top'
                  placeholder='blur'
                  blurDataURL={screenshot}
                />
                <div className='hidden md:block bg-purple transition duration-500 absolute inset-0 bg-opacity-50 backdrop-filter backdrop-grayscale hover:backdrop-grayscale-0 hover:bg-opacity-0 focus:backdrop-grayscale-0 focus:bg-opacity-0'></div>
              </div>
            ))}
          </div>
        </Section>
      </Body>
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = works.map((work) => ({
    params: { id: `${work.id}` },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const work = works.find((work) => `${work.id}` === params?.id);

  return { props: { work } };
};

type WorkProps = {
  work: IWork;
};

export default Work;
