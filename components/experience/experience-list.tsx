import { Clock, Hash } from 'react-feather';

import ExperienceItem from './experience-item';

import experiences from '../../data/experiences';

const ExperienceList = () => {
  return (
    <div className="lg:divide-y">
      <div className="hidden lg:flex px-5 py-2 tracking-wider uppercase font-semibold text-xs">
        <div className="w-10">
          <Hash size={14} strokeWidth={2} />
        </div>
        <div className="w-2/3 flex items-center">Position &amp; Company</div>
        <div className="w-1/4 hidden xl:block">Location</div>
        <div className="w-1/2 xl:w-1/4 hidden lg:block">
          <Clock className="ml-auto" size={14} strokeWidth={2} />
        </div>
      </div>
      <div className="pt-3">
        {experiences.map((experience: IExperience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
