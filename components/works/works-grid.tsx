import WorkCard from './work-card';

import works from '../../data/works';

const WorksGrid = ({ isOneRow }: WorksGridProps) => {
  const featuredWork = isOneRow ? [...works.slice(0, 5)] : [...works];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {featuredWork.map(({ id, screenshots, title, technologies }: IWork, i: number) => {
        let classname = '';
        if (isOneRow) {
          if (i === 3) {
            classname = 'hidden lg:block';
          } else if (i === 4) {
            classname = 'hidden xl:block';
          }
        }

        return (
          <div key={id} className={classname}>
            <WorkCard id={id} thumbnail={screenshots[0]} title={title} technologies={technologies} />
          </div>
        );
      })}
    </div>
  );
};

type WorksGridProps = {
  isOneRow?: boolean;
};

export default WorksGrid;
