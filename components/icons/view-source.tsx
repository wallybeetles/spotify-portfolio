import { GitHub } from 'react-feather';

import Tooltip from '../tooltip';

const ViewSource = ({ url }: ViewSourceProps) => {
  return (
    <Tooltip content="View source">
      <a href={url} target="_blank" rel="noreferrer" className="hover:text-white">
        <GitHub size={18} strokeWidth={2} />
      </a>
    </Tooltip>
  );
};

type ViewSourceProps = {
  url: string;
};

export default ViewSource;
