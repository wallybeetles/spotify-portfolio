const Body = ({ children }: BodyProps) => {
  return (
    <div className='p-4 md:p-7 text-xs sm:text-sm text-gray-100'>
      {children}
    </div>
  );
};

type BodyProps = {
  children: JSX.Element | JSX.Element[];
};

export default Body;
