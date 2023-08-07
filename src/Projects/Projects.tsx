import { ProjectInfo } from './Project';
import Project from './Project';

const PROJECTS: ProjectInfo[] = [{
  title: 'Personal site',
  description: 'A small personal site with information about me, pet-projects and favorite photos.',
  iconPath: 'icons/personal.png',
  linkWeb: 'https://nina-torgunakova.vercel.app/',
  linkCode: 'https://github.com/ninaTorgunakova/portfolio'
}, {
  title: 'Nano Stores Angular',
  description: 'Angular integration for Nano Stores, a tiny state manager with many atomic tree-shakable stores.',
  iconPath: 'icons/nanostores.svg',
  linkCode: 'https://github.com/nanostores/angular'
}, {
  title: 'William Shakespeare`s quote generator',
  description: 'Quote generator of the wisest of writers.',
  iconPath: 'icons/shakespeare.webp',
  linkWeb: 'https://shakespeare-quotes-generator.vercel.app/',
  linkCode: 'https://github.com/ninaTorgunakova/shakespeare-quotes-generator'
}, {
  title: 'Acropolis Secret',
  description: 'Landing page for imaginary restaurant with cozy atmosphere and delicious food.',
  iconPath: 'icons/restaurant.webp',
  linkWeb: 'https://restaurant-project-theta.vercel.app/',
  linkCode: 'https://github.com/ninaTorgunakova/restaurant-project'
}];

const Projects = (): JSX.Element => {
  return (
    <div className='work-content'>
      { PROJECTS.map((work, i) => <Project key={i} info={work}/>) }
    </div>
  );
};

export default Projects;