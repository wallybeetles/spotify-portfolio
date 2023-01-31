import Image from 'next/image';
import { Heart } from 'react-feather';

import ExperienceModal from './experience-modal';

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div
      key={experience.id}
      className="group md:px-5 py-2 flex items-center hover:text-white hover:bg-opacity-10 hover:bg-white rounded-md"
    >
      <div className="hidden md:block w-10">
        <Heart size={14} className="text-green-spotify hidden group-hover:block" />
        <div className="group-hover:hidden">{experience.id}</div>
      </div>
      <div className="w-5/6 md:w-2/3 flex items-center">
        <div className="bg-white w-9 h-9">
          <div className="relative w-8 h-8">
            <Image
              src={experience.imgSrc}
              alt="company"
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={experience.imgSrc}
            />
          </div>
        </div>
        <div className="ml-2 md:ml-4">
          <span className="text-white font-semibold truncate">{experience.company}</span>
          <div className="truncate">{experience.position}</div>
        </div>
      </div>
      <div className="w-1/4 hidden xl:block">{experience.location}</div>
      <div className="w-1/2 xl:w-1/4 text-right hidden lg:block">{experience.duration}</div>
      <div className="ml-auto lg:hidden cursor-pointer">
        <ExperienceModal experience={experience} />
      </div>
    </div>
  );
};

type ExperienceItemProps = {
  experience: IExperience;
};

export default ExperienceItem;
