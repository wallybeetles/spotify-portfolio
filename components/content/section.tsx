import { ReactNode } from 'react';

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <h3 className="text-white font-bold text-xl md:text-2xl mb-3 md:mb-5">{title}</h3>
);

const Section = ({ children }: SectionProps) => <div className="py-4 md:py-6">{children}</div>;

type SectionTitleProps = {
  title: string;
};

type SectionProps = {
  children: ReactNode;
};

export default Section;
