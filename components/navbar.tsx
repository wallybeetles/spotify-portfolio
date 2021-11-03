import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import SendMail from './icons/send-mail';

const Navbar = ({ hideOnTop, isVisible, sendMailIcon, text }: NavbarProps) => {
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const childrenVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (hideOnTop) {
      if (isVisible) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }
  }, [hideOnTop, isVisible, controls]);

  return (
    <motion.nav
      variants={variants}
      animate={controls}
      className={`${
        hideOnTop ? 'opacity-0 bg-purple' : 'bg-transparent'
      } fixed top-0 z-50 w-full h-14 md:h-16 px-4 md:px-7 flex items-center`}
    >
      <motion.div
        variants={childrenVariants}
        className='flex justify-center md:justify-start w-full items-center relative'
      >
        {sendMailIcon && (
          <div className='absolute md:static right-0 top-4 md:mr-4'>
            <SendMail />
          </div>
        )}
        <div className='text-white md:text-xl font-bold'>{text}</div>
      </motion.div>
    </motion.nav>
  );
};

type NavbarProps = {
  hideOnTop?: boolean;
  isVisible?: boolean;
  sendMailIcon?: boolean;
  text: string;
};

export default Navbar;
