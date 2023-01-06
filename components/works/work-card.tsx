import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'react-feather';

const WorkCard = (props: WorkCardProps) => {
  return (
    <div className="group md:p-4 md:pb-8 md:bg-gray-400 rounded-md hover:bg-gray-300">
      <Link href={`/works/${props.id}`} passHref>
        <a>
          <div className="relative h-36 md:h-44">
            <Image
              src={props.thumbnail}
              alt="profile-pic"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={props.thumbnail}
            />
            <Eye
              strokeWidth={2}
              className="hidden group-hover:flex items-center justify-center mr-2 mb-2 p-3 h-10 w-10 text-white absolute right-0 bottom-0 bg-green-spotify rounded-full transform hover:scale-110 transition duration-200"
            />
          </div>
          <div className="text-white text-xs sm:text-sm md:text-base mt-3 md:mt-4 font-semibold truncate">
            {props.title}
          </div>
          <div className="text-xs md:text-sm truncate">{props.technologies.slice(0, 2).join(' • ')}</div>
        </a>
      </Link>
    </div>
  );
};

type WorkCardProps = {
  id: string;
  thumbnail: string;
  title: string;
  technologies: string[];
};

export default WorkCard;
