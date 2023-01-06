import Button from './button';
import CopyToClipboard from './icons/copy-to-clipboard';
import SendMail from './icons/send-mail';
import ViewSource from './icons/view-source';

export const WorkControlPanel = ({ url, githubUrl }: WorkControlPanelProps) => {
  return (
    <div className="flex items-center">
      <a href={url} target="_blank" rel="noreferrer">
        <Button round>Live Site</Button>
      </a>
      {githubUrl && (
        <div className="ml-5 md:ml-7">
          <ViewSource url={githubUrl} />
        </div>
      )}
      <div className="ml-5 md:ml-7">
        <CopyToClipboard tooltipContent="Copy link to project" />
      </div>
    </div>
  );
};

const ControlPanel = () => {
  return (
    <div className="flex items-center">
      <div className="md:ml-7">
        <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">
          <Button>Resume</Button>
        </a>
      </div>
      <div className="ml-5 md:ml-7">
        <CopyToClipboard tooltipContent="Copy link to portfolio" />
      </div>
      <div className="ml-auto md:ml-0 md:order-first ">
        <SendMail size="large" />
      </div>
    </div>
  );
};

type WorkControlPanelProps = {
  url: string;
  githubUrl: string;
};

export default ControlPanel;
