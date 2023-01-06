import Image from 'next/image';
import { Check } from 'react-feather';

import profilePicture from '../public/assets/me.jpeg';

export const ProfileHero = () => {
  return (
    <div className="h-96 md:bg-gradient-to-b from-gray-200 to-gray-400 flex flex-col justify-end p-4 md:p-7 text-white">
      <div className="flex flex-col md:flex-row items-center md:items-end">
        <div className="w-48 h-48 xl:w-64 xl:h-64 rounded-full shadow-2xl relative overflow-hidden">
          <Image src={profilePicture} alt="profile-pic" layout="fill" objectFit="cover" placeholder="blur" />
        </div>
        <div className="md:ml-6 mt-3 md:mt-0 text-center md:text-left">
          <span className="uppercase text-xs md:text-sm md:font-bold">Username</span>
          <div className="text-4xl sm:text-5xl md:text-3xl lg:text-6xl xl:text-7xl font-extrabold">@sjkayle</div>
        </div>
      </div>
    </div>
  );
};

export const WorkHero = ({ place, title }: WorkHeroProps) => {
  return (
    <div className="h-96 md:bg-gradient-to-b from-purple-light to-purple flex flex-col justify-end p-4 md:p-7 text-white">
      <span className="uppercase text-xs md:text-sm md:font-bold">{place}</span>
      <div className="text-4xl sm:text-7xl md:text-3xl lg:text-6xl xl:text-7xl font-extrabold">{title}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover h-96 bg-right bg-fixed flex flex-col justify-end p-4 md:p-7 text-white"
        style={{
          backgroundImage: 'url("/assets/hero.jpg")',
        }}
      >
        <div className="z-10">
          <div className="flex items-center">
            <Check className="bg-blue rounded-full p-1 mr-1 md:mr-2" strokeWidth={1} size={21} />
            <span className="uppercase text-xs md:text-sm md:font-semibold">Front-end Developer</span>
          </div>
          <div className="mt-2 md:mt-0 text-4xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
            Kayle San Juan
          </div>
        </div>
      </div>
      <div className="h-full bg-black bg-opacity-50 absolute inset-0"></div>
    </div>
  );
};

type WorkHeroProps = {
  place: string;
  title: string;
};

export default Hero;
