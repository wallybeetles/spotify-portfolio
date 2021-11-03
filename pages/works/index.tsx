import type { NextPage } from 'next';

import Body from '../../components/body';
import Navbar from '../../components/navbar';
import Section from '../../components/section';
import WorksGrid from '../../components/works-grid';
import Main from '../../components/layouts/main';

const Works: NextPage = () => {
  return (
    <Main pageBackground='gray' pageTitle='Works'>
      <Navbar text='Works' />
      <Body>
        <div className='mt-7 md:mt-4'>
          <Section>
            <WorksGrid />
          </Section>
        </div>
      </Body>
    </Main>
  );
};

export default Works;
