import { useStore } from '@nanostores/react';
import { FC } from 'react';
import { $theme } from '../state/themes';

export interface HighlightInfo {
  title: string;
  description: string;
  link: string;
  iconPath: string;
}

const Highlight: FC<{info: HighlightInfo}> = ({ info }): JSX.Element => {
  const theme = useStore($theme);
  return (
    <div className='card'>
      <img alt='' src={info.iconPath} className='work-icon'></img>
      <div className='text-info'>
        <div style={theme.boldText} className='title'>{info.title}</div>
        <div style={theme.text} className='description'>{info.description}</div>
        <a href={info.link} style={theme.text} target='_blank' rel='noreferrer'>Link to the highlight</a>
      </div>
    </div>
  );
};

export default Highlight;