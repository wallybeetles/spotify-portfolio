import { ReactNode } from 'react';

const Button = (props: ButtonProps) => {
  const round = props.round ? 'rounded-full' : 'rounded-md';

  return (
    <button
      className={`${round} flex items-center text-xs md:text-sm tracking-wider h-7 md:h-8 md:uppercase font-semibold text-white px-3 md:px-4 border border-gray-100 hover:border-white`}
    >
      {props.children}
    </button>
  );
};

type ButtonProps = {
  children: ReactNode;
  round?: boolean;
};

export default Button;
