import WorkCard from './work-card';

import works from '../../data/works';

const WorksFlexbox = () => {
  return (
    <div className="flex overflow-x-auto gap-4">
      {works.slice(0, 5).map(({ id, screenshots, title, technologies }) => (
        <div key={id} className="flex-1">
          <div className="w-44 sm:w-64">
            <WorkCard id={id} thumbnail={screenshots[0]} title={title} technologies={technologies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksFlexbox;
