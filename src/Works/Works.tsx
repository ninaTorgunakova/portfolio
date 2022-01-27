import { State } from '../redux/themeReducer';
import { WorkInfo } from './Work/Work';
import Work from './Work/Work';
import './Works.sass';

const Works = (state: State) => {
  const works: WorkInfo[] = [{
    title: "Личный сайт",
    description: "Небольшой личный сайт с персональной информацией, личными проектами и любимыми фотографиями.",
    iconPath: 'icons/personal.png',
    linkWeb: '',
    linkCode: 'https://github.com/ninaTorgunakova/portfolio'
  }];
  return (
    <div className="work-content">
      {works.map((work, i) => <Work key={i} info={work} theme={state.theme}></Work>)}
    </div>
  );
};

export default Works;