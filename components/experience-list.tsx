import Image from 'next/image';
import { Clock, Hash, Heart } from 'react-feather';

import experiences from '../data/experiences';
import ExperienceModal from './experience-modal';

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div
      key={experience.id}
      className='group md:px-5 py-2 flex items-center hover:text-white hover:bg-opacity-10 hover:bg-white rounded-md'
    >
      <div className='hidden md:block w-10'>
        <Heart
          size={14}
          className='text-green-spotify hidden group-hover:block'
        />
        <div className='group-hover:hidden'>{experience.id}</div>
      </div>
      <div className='w-5/6 md:w-2/3 flex items-center'>
        <div className='bg-white w-9 h-9'>
          <div className='relative w-8 h-8'>
            <Image
              src={experience.imgSrc}
              alt='company'
              layout='fill'
              objectFit='contain'
              placeholder='blur'
              blurDataURL={experience.imgSrc}
            />
          </div>
        </div>
        <div className='ml-2 md:ml-4'>
          <span className='text-white font-semibold truncate'>
            {experience.position}
          </span>
          <div className='truncate'>{experience.company}</div>
        </div>
      </div>
      <div className='w-1/4 hidden xl:block'>{experience.location}</div>
      <div className='w-1/2 xl:w-1/4 text-right hidden lg:block'>
        {experience.duration}
      </div>
      <div className='ml-auto lg:hidden cursor-pointer'>
        <ExperienceModal experience={experience} />
      </div>
    </div>
  );
};

const ExperienceList = () => {
  return (
    <div className='lg:divide-y'>
      <div className='hidden lg:flex px-5 py-2 tracking-wider uppercase font-semibold text-xs'>
        <div className='w-10'>
          <Hash size={14} strokeWidth={2} />
        </div>
        <div className='w-2/3 flex items-center'>Position &amp; Company</div>
        <div className='w-1/4 hidden xl:block'>Location</div>
        <div className='w-1/2 xl:w-1/4 hidden lg:block'>
          <Clock className='ml-auto' size={14} strokeWidth={2} />
        </div>
      </div>
      <div className='pt-3'>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

type ExperienceItemProps = {
  experience: IExperience;
};

export default ExperienceList;
