import { State } from '../redux/themeReducer';
import './About.sass';

const About = (state: State): JSX.Element => {
  return (
    <div className='about-content'>
      <p style={state.theme.text} className='text'>
          My name is Nina, I'm 23 years old and I'm a frontend developer with 2.5+ years of working experience
        with Angular and React. I had been working as a copywriter for a couple of years while studying at university,
        but soon decided that I love to write code much more than articles.
      </p>

      <p style={state.theme.text} className='text'>
          In my most recent job I significantly accelerated the pace of development in a frontend team.
        I am currently seeking a challenging position with an opportunity to leverage and improve strong programming skills.
      </p>

      <h1 style={state.theme.boldText}>Skills</h1>
      <ul style={state.theme.text}>
        <li>TypeScript, JavaScript</li>
        <li>Angular, RxJS, React, Redux</li>
        <li>HTML5, SASS, SCSS, CSS-in-JS, CSS3</li>
        <li>Jasmine & Karma, Jest</li>
        <li>Figma, UX Design skills</li>
        <li>REST, GraphQL</li>
        <li>GIT</li>
      </ul>

      <h1 style={state.theme.boldText}>Languages</h1>
      <ul style={state.theme.text}>
        <li>English — C1 Certificate</li>
        <li>Russian — Native</li>
      </ul>

      <h1 style={state.theme.boldText}>Education</h1>
      <p style={state.theme.text} className='text'>
          In 2021, I graduated from NSTU with a B.Tech CS & Engineering degree.
        As a part of the diploma developed an online consultant for university applicants and received a score of excellent.
      </p>

      <h1 style={state.theme.boldText}>Interests</h1>
      <p style={state.theme.text} className='text'>
          In my free time, I like to read books about time management and solve
        algorithmic problems on Leetcode - this is my favorite kind of brainstorming
        and training the ability to find an effective problem's solution
        in a short time. I'm also into studying UI&UX materials because I think
        that advanced frontend developers should take on responsibility 
        for the experience of interacting with the interface.
      </p>
    </div>
  );
};

export default About;