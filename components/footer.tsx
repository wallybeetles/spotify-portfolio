import { memo } from 'react';

import socials from '../data/socials';

const Footer = memo(function Footer() {
  return (
    <footer className='w-full p-4 md:p-6 bg-gray-400 text-gray-100 fixed bottom-0 border-t border-gray-300 h-16 md:h-24 flex justify-between items-center z-50'>
      <div className='hidden md:block flex-1'></div>
      <div className='flex md:justify-center flex-1'>
        <div className='flex items-center'>
          {socials.map(({ id, icon: Icon, url }) => (
            <div
              key={id}
              className='transform hover:scale-105 hover:text-green-spotify transition duration-200 mx-2 md:mx-3'
            >
              <a href={url} target='_blank' rel='noreferrer'>
                <Icon strokeWidth={1.5} size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='text-xs text-right flex-1'>
        <div>Developed by sjkayle</div>
        <div className='truncate'>Design inspired by Spotify App</div>
      </div>
    </footer>
  );
});

export default Footer;
