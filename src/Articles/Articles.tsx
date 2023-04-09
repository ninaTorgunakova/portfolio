
import { ArticleInfo } from './Article';
import Article from './Article';

const ARTICLES: ArticleInfo[] = [{
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