import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import type { Icon } from 'react-feather';
import { Clock, MapPin, MoreHorizontal, Users } from 'react-feather';
import Modal from 'react-modal';

const customStyles = {
  content: {
    background: 'none',
    inset: 0,
    padding: '2rem 0',
    border: 'none',
  },
  overlay: { zIndex: 100 },
};

const ExperienceModalItem = ({ icon: Icon, text }: ExperienceModalItemProps) => {
  return (
    <div className="group p-8 h-10 flex items-center hover:bg-gray-400 hover:bg-opacity-50 hover:text-gray-100 text-sm">
      <div className="text-gray-100 group-hover:text-green-spotify">
        <Icon size={18} strokeWidth={1} />
      </div>
      <span className="ml-4 flex items-center">{text}</span>
    </div>
  );
};

const ExperienceModal = memo(function ExperienceModal({ experience }: ExperienceModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function test() {
      if (window.innerWidth > 767 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', test);

    return () => window.removeEventListener('resize', test);
  }, [isOpen]);

  return (
    <>
      <MoreHorizontal
        size={18}
        strokeWidth={1}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Modal
        closeTimeoutMS={200}
        isOpen={isOpen}
        bodyOpenClassName="overflow-hidden"
        style={customStyles}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        overlayClassName="fixed inset-0 backdrop-filter backdrop-blur bg-gray-300 bg-opacity-95"
        ariaHideApp={false}
      >
        <div className="text-white flex flex-col h-full">
          <div className="flex flex-col items-center">
            <div className="bg-white w-36 h-36 relative">
              <Image src={experience?.imgSrc} alt="company" layout="fill" objectFit="contain" />
            </div>
            <div className="font-semibold mt-5">{experience?.company}</div>
          </div>
          <div className="mt-5">
            <ExperienceModalItem text={experience?.position} icon={Users} />
            <ExperienceModalItem text={experience?.location} icon={MapPin} />
            <ExperienceModalItem text={experience?.duration} icon={Clock} />
          </div>
          <div
            className="mt-auto font-semibold flex justify-center cursor-pointer hover:text-gray-100"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </div>
        </div>
      </Modal>
    </>
  );
});

type ExperienceModalItemProps = {
  text?: string;
  icon: Icon;
};

type ExperienceModalProps = {
  experience: IExperience;
};

export default ExperienceModal;
