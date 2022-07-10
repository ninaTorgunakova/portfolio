import { Theme } from '../../redux/themes';
import './Work.sass';

export interface WorkInfo {
  title: string;
  description: string;
  iconPath: string;
  linkWeb: string;
  linkCode: string;
}

interface WorkProps {
  info: WorkInfo;
  theme: Theme
}

const Work = (props: WorkProps) => {
  return (
    <div className="card">
      <img alt="" src={props.info.iconPath} className="work-icon"></img>
      <div className="text-info">
        <div style={props.theme.boldText} className="title">{props.info.title}</div>
        <div style={props.theme.text} className="description">{props.info.description}</div>
        <a href={props.info.linkWeb} style={props.theme.text} className="link" target="_blank" rel="noreferrer">Link to site</a>
        <a href={props.info.linkCode} style={props.theme.text} className="link" target="_blank" rel="noreferrer">Link to repo</a>
      </div>
    </div>
  );
};

export default Work;