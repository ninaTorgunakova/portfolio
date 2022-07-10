import { State } from '../redux/themeReducer';
import { WorkInfo } from './Work/Work';
import Work from './Work/Work';
import './Works.sass';

const Works = (state: State) => {
  const works: WorkInfo[] = [{
    title: "Personal site",
    description: "A small personal site with information about me, pet-projects and favorite photos.",
    iconPath: 'icons/personal.png',
    linkWeb: 'https://github.com/ninaTorgunakova/shakespeare-quotes-generator',
    linkCode: 'https://github.com/ninaTorgunakova/portfolio'
  }, {
    title: "William Shakespeare's quote generator",
    description: "Quote generator of the wisest of writers.",
    iconPath: 'icons/personal.png',
    linkWeb: 'https://shakespeare-quotes-generator.vercel.app/',
    linkCode: 'https://github.com/ninaTorgunakova/shakespeare-quotes-generator'
  }];
  return (
    <div className="work-content">
      {works.map((work, i) => <Work key={i} info={work} theme={state.theme}></Work>)}
    </div>
  );
};

export default Works;