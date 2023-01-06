import { ReactNode } from 'react';

const Body = ({ children }: BodyProps) => <div className="p-4 md:p-7 text-xs sm:text-sm text-gray-100">{children}</div>;

type BodyProps = {
  children: ReactNode;
};

export default Body;
