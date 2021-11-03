import { MailIcon } from '@heroicons/react/solid';

const SendMail = ({ size }: SendMailProps) => {
  return (
    <a href='mailto:kayle.sanjuan@gmail.com' aria-label='Send mail'>
      <MailIcon
        className={`${
          size === 'large' ? 'md:w-16 md:h-16 md:p-5' : ''
        } w-10 h-10 p-3 text-white bg-green-spotify rounded-full transform hover:scale-107 transition duration-200`}
      />
    </a>
  );
};

const defaultProps = {
  size: 'base',
};

type SendMailProps = {
  size?: 'base' | 'large';
};

SendMail.defaultProps = defaultProps;

export default SendMail;
