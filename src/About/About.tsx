import { State } from '../redux/themeReducer';
import './About.sass';

const About = (state: State) => {
  return (
    <div className='about-content'>
      <p style={state.theme.text}>
            My name is Nina, I'm 23 years old and I work as a frontend developer.
        I had been working as a copywriter for a couple of years while studying at university,
        but soon decided that I like to write code much more than articles.
      </p>
      <p style={state.theme.text}>
          In 2021, I graduated from NSTU with a CS degree.
        As a part of my diploma I developed the online consultant
        for NSTU applicants, used languages <span style={state.theme.boldText}>Python </span>
        и <span style={state.theme.boldText}>TypeScript</span>.
      </p>
      <p style={state.theme.text}>
          Currently I'm working in a company where the frontend part
        is created by <span style={state.theme.boldText}>Angular</span>, 
        but also I had commercial experience
        development by <span style={state.theme.boldText}>React. </span>
        I find my enthusiasm and see the pros in both languages.
      </p>
      <p style={state.theme.text}>
          In my free time I like to solve algorithmic problems
        on Leetcode - this is my favorite kind of brainstorm
        and training the ability to find an effective problem's solution
        in a short time. I'm also learning UX gradually beacause I think
        that advanced frontend developer should take on
        responsibility for the experience of interacting with the his interface.
      </p>
      <p style={state.theme.text}>
            In my spare time from programming, I'm fond of pole dance.
        I am also a candidate master of sports in bullet shooting
        and a great fan of books about productivity.
      </p>
    </div>
  );
};

export default About;