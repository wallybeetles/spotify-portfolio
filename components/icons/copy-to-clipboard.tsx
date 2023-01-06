import { toast } from 'react-toastify';
import { Link } from 'react-feather';

import Tooltip from '../tooltip';

function CopyToClipboard({ tooltipContent }: CopyToClipboardProps) {
  const handleClick = () => {
    const location = window.location.href;
    navigator.clipboard.writeText(location).then(() => {
      toast('Link copied to clipboard');
    });
  };

  return (
    <Tooltip content={tooltipContent}>
      <div className="cursor-pointer hover:text-white" onClick={handleClick}>
        <Link size={18} strokeWidth={2} />
      </div>
    </Tooltip>
  );
}

type CopyToClipboardProps = {
  tooltipContent: string;
};

export default CopyToClipboard;
