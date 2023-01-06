import Tippy from '@tippyjs/react';

const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <Tippy arrow={false} delay={[300, 0]} content={content} animation="shift-away-subtle" offset={[0, 15]}>
      {children}
    </Tippy>
  );
};

type TooltipProps = {
  children: JSX.Element;
  content: string;
};

export default Tooltip;
