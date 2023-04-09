import { useStore } from '@nanostores/react';
import { FC } from 'react';
import { $theme } from '../state/themes';

export interface ProjectInfo {
  title: string;
  description: string;
  iconPath: string;
  linkWeb?: string;
  linkCode: string;
}

const Project: FC<{info: ProjectInfo}> = ({info}): JSX.Element => {
  const theme = useStore($theme);
  return (
    <div className='card'>
      <img alt='' src={info.iconPath} className='work-icon'></img>
      <div className='text-info'>
        <div style={theme.boldText} className='title'>{info.title}</div>
        <div style={theme.text} className='description'>{info.description}</div>
        {info.linkWeb && <a href={info.linkWeb} style={theme.text} target='_blank' rel='noreferrer'>Link to the site</a>}
        <a href={info.linkCode} style={theme.text} target='_blank' rel='noreferrer'>Link to the repo</a>
      </div>
    </div>
  );
};

export default Project;