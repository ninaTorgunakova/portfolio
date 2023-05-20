import { useStore } from '@nanostores/react';
import { $theme } from '../state/themes';

import './About.sass';

const About = (): JSX.Element => {
  const theme = useStore($theme);
  return (
    <div className='about-content'>
      <p style={theme.text} className='text'>
          My name is Nina, I'm 23 years old and  I'm a Frontend Engineer at <a href='https://evilmartians.com/' target='_blank' rel='noreferrer' style={theme.link}>Evil Martians.</a> I'm talking and writing
          about what I love: algorithms and web technologies. My great inspiration is to shape thoughts into articles, code, and also to speak publicly.
      </p>

      <h1 style={theme.boldText}>Education</h1>
      <p style={theme.text} className='text'>
          In 2021, I graduated from NSTU with a B.Tech CS & Engineering degree.
        As a part of the diploma developed an online consultant for university applicants and received a score of excellent.
      </p>

      <h1 style={theme.boldText}>Interests</h1>
      <p style={theme.text} className='text'>
          In my free time, I like to read books about time management and solve
        algorithmic problems on Leetcode - this is my favorite kind of brainstorming
        and training the ability to find an effective problem's solution
        in a short time. I'm also into studying UI&UX materials because I think
        that advanced frontend developers should take on responsibility 
        for the experience of interacting with the interface.
      </p>

      <div className='contacts-list'>
        <h1 style={theme.boldText}>Contacts</h1>
        <a href='mailto:ninatorgunakova@gmail.com' target='_blank' rel='noreferrer' style={theme.boldText}>
          ninatorgunakova@gmail.com
        </a>
        <span>
          <b style={theme.boldText}>tg: </b>
          <a href='https://t.me/seagullNina' target='_blank' rel='noreferrer' style={theme.text}>
            @seagullNina
          </a>
        </span>
        <span>
          <b style={theme.boldText}>linkedIn: </b>
          <a href='https://www.linkedin.com/in/nina-torgunakova/' target='_blank' rel='noreferrer' style={theme.text}>
            nina-torgunakova
          </a>
        </span>
        <span>
          <b style={theme.boldText}>gitHub: </b>
          <a href='https://github.com/ninaTorgunakova' target='_blank' rel='noreferrer' style={theme.text}>
            ninaTorgunakova
          </a>
        </span>
      </div>
    </div>
  );
};

export default About;