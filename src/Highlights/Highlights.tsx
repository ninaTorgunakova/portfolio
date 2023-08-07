
import { HighlightInfo } from './Highlight';
import Highlight from './Highlight';

const HIGHLIGHTS: HighlightInfo[] = [{
  title: 'Smart nano stores for state management, or how we made front-end simpler',
  description: 'The future talk at the iJS Munich conference',
  link: 'https://javascript-conference.com/javascript-practices-tools/nano-stores-state-management-advancement/',
  iconPath: 'icons/munichNanostores.webp'
}, {
  title: 'Solving algorithms: beyond cramming for job interviews',
  description: 'My report at the international meetup in Georgia, which I also organized.',
  link: 'https://evilmartians.com/events/solving-algorithms-bites-and-bytes',
  iconPath: 'icons/tbilisi-meetup.webp'
}, {
  title: 'Algorithms? Are you seriously?',
  description: 'Podcast with a Front Spot Global Community.',
  link: 'https://www.youtube.com/watch?v=8vOGz-DHyMM',
  iconPath: 'icons/frontspot.webp'
}, {
  title: 'Пишем мини Minesweeper',
  description: 'Podcast with solving Minesweeper problem on the YouTube channel @algoseekee',
  link: 'https://www.youtube.com/watch?v=W__SIPW5EcM',
  iconPath: 'icons/minesweeper.webp'
}];

const Highlights = (): JSX.Element => {
  return (
    <div className='work-content'>
      { HIGHLIGHTS.map((work, i) => <Highlight key={i} info={work}/>) }
    </div>
  );
};

export default Highlights;