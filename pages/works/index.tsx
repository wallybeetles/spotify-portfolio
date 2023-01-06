import type { NextPage } from 'next';

import Body from '../../components/content/body';
import Navbar from '../../components/content/navbar';
import Section from '../../components/content/section';
import Main from '../../components/layouts/main';
import WorksGrid from '../../components/works/works-grid';

const Works: NextPage = () => {
  return (
    <Main pageBackground="gray" pageTitle="Works">
      <Navbar text="Works" transparent />
      <Body>
        <div className="mt-7 md:mt-4">
          <Section>
            <WorksGrid />
          </Section>
        </div>
      </Body>
    </Main>
  );
};

export default Works;
