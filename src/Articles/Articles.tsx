
import { ArticleInfo } from './Article';
import Article from './Article';

const ARTICLES: ArticleInfo[] = [{
  title: 'Before your next frontend pull request, use this checklist',
  description: 'My article for front-end engineers about what is important to consider before creating a new PR',
  link: 'https://evilmartians.com/chronicles/before-your-next-frontend-pull-request-use-this-checklist',
  iconPath: 'icons/frontendRequest.webp'
}, {
  title: 'How a year-long LeetCode habit upped my professional game—Martian Chronicles, Evil Martians’ team blog',
  description: 'My article about benefits of solving algorithms, and why it`s important not only for job interviews.',
  link: 'https://evilmartians.com/chronicles/how-a-year-long-leetcode-habit-upped-my-professional-game',
  iconPath: 'icons/yearLeetCode.webp'
}, {
  title: 'Nano Stores in Angular: how to make the state management simpler',
  description: 'The article is about how to use Nano Stores in Angular and what are its advantages.',
  link: 'https://dev.to/evilmartians/nano-stores-in-angular-how-to-make-the-state-management-simpler-38a1',
  iconPath: 'icons/nanostores.svg'
}, {
  title: 'OKLCH в CSS: по­че­му мы ушли от RGB и HSL',
  description: 'Russian translation of the article about OKLCH in CSS.',
  link: 'https://web-standards.ru/articles/oklch-in-css-why-quit-rgb-hsl/',
  iconPath: 'icons/oklch.webp'
}, {
  title: 'Как правильно решать задачи на LeetCode: подробный гайд по тренажёру для программистов',
  description: 'Interview with me for the platform Skillbox Media Code about solving algorithms.',
  link: 'https://skillbox.ru/media/code/kak-pravilno-reshat-zadachi-na-leetcode-podrobnyy-gayd-po-trenazhyeru-dlya-programmistov/',
  iconPath: 'icons/skillbox.webp'
}];

const Articles = (): JSX.Element => {
  return (
    <div className='work-content'>
      { ARTICLES.map((work, i) => <Article key={i} info={work}/>) }
    </div>
  );
};

export default Articles;