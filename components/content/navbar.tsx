import { motion } from 'framer-motion';

import SendMail from '../icons/send-mail';

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
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = ({ transparent, sendMailIcon, text }: NavbarProps) => {
  return (
    <motion.nav
      variants={variants}
      animate="visible"
      initial="hidden"
      exit="hidden"
      className={`${
        transparent ? 'bg-gray-500' : 'bg-purple'
      } fixed top-0 z-50 w-full h-14 md:h-16 px-4 md:px-7 flex items-center`}
    >
      <motion.div
        variants={childrenVariants}
        className="flex justify-center md:justify-start w-full items-center relative"
      >
        {sendMailIcon && (
          <div className="absolute md:static right-0 top-3 md:mr-4">
            <SendMail />
          </div>
        )}
        <div className="text-white md:text-xl font-bold">{text}</div>
      </motion.div>
    </motion.nav>
  );
};

type NavbarProps = {
  sendMailIcon?: boolean;
  text: string;
  transparent?: boolean;
};

export default Navbar;
