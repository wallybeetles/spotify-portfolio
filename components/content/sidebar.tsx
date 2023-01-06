import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { HomeIcon, FolderOpenIcon, UserIcon } from '@heroicons/react/outline';
import {
  HomeIcon as SolidHomeIcon,
  FolderOpenIcon as SolidFolderOpenIcon,
  UserIcon as SolidUserIcon,
} from '@heroicons/react/solid';

const sidebarItems: ISidebar[] = [
  {
    id: 1,
    path: '/',
    label: 'Home',
    icon: HomeIcon,
    solidIcon: SolidHomeIcon,
  },
  {
    id: 2,
    path: '/works',
    label: 'My library',
    icon: FolderOpenIcon,
    solidIcon: SolidFolderOpenIcon,
  },
  {
    id: 3,
    path: '/profile',
    label: 'Profile',
    icon: UserIcon,
    solidIcon: SolidUserIcon,
  },
];

const Sidebar = memo(function Sidebar() {
  const router = useRouter();

  return (
    <div className="bg-black fixed w-full h-12 md:w-60 md:h-full bottom-16 md:bottom-0 md:left-0 p-2 z-40">
      <ul className="flex justify-evenly md:block md:my-4">
        {sidebarItems.map(({ id, path, label, icon: Icon, solidIcon: SolidIcon }) => {
          const isActive = path === router.pathname;
          return (
            <li key={id}>
              <Link href={path} passHref>
                <a
                  className={`${
                    isActive ? 'md:bg-gray-300 text-white' : 'text-gray-100'
                  } md:font-semibold text-xs md:text-sm hover:text-white h-10 flex flex-col md:flex-row justify-center md:justify-start items-center px-3 rounded-md transform focus:scale-90 md:focus:scale-100`}
                >
                  {isActive ? <SolidIcon className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  <span className="md:ml-4">{label}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

interface ISidebar {
  id: number;
  path: string;
  label: string;
  icon: HeroIcon;
  solidIcon: HeroIcon;
}

export default Sidebar;
