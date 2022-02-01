import { State } from '../redux/themeReducer';
import './About.sass';

const About = (state: State) => {
  return (
    <div className="about-content">
      <p style={state.theme.text}>
        Меня зовут <span style={state.theme.boldText}>Нина</span>, мне 22 года и я работаю frontend
        разработчиком. Пару лет после наступления 
        своего совершеннолетия
        я работала копирайтером, но вскоре решила, что писать код мне
        нравится гораздо больше, чем статьи.
      </p>
      <p style={state.theme.text}>
            В 2021 году я окончила НГТУ по направлению 
        «Информатика и вычислительная техника».
        В рамках диплома я разработала онлайн-консультанта
        для абитуриентов НГТУ на языках <span style={state.theme.boldText}>Python </span>
        и <span style={state.theme.boldText}>TypeScript</span>.
      </p>
      <p style={state.theme.text}>
        Я работаю в компании, где frontend-часть
        создаётся на <span style={state.theme.boldText}>Angular</span>, 
        но также у меня был опыт коммерческой
        разработки на <span style={state.theme.boldText}>React. </span>
        Я нахожу свой интерес и вижу плюсы в обоих инструментах.
      </p>
      <p style={state.theme.text}>
            В свободное от работы время я люблю решать алгоритмические задачи 
        на Leetcode -  это мой любимый вид брейншторма
        и тренировки умения находить эффективное решение проблемы
        в сжатые сроки. Также я постепенно изучаю UX, так как думаю,
        что продвинутому frontend-разработчику стоит брать на себя 
        ответственность за опыт взаимодействия с интерфейсом.
      </p>
      <p style={state.theme.text}>
            В свободное от программирования время я увлекаюсь exotic pole dance.
        Также я кандидат в мастера спорта по пулевой стрельбе.
      </p>
    </div>
  );
};

export default About;