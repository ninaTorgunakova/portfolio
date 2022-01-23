import { State } from '../redux/themeReducer';
import './About.sass';

const About = (state: State) => {
  return (
    <div>
      <span style={state.theme.headers}>It is header2</span>
      <span style={state.theme.text}>It is text</span>
      <span style={state.theme.boldText}>It is bold text</span>
    </div>
  );
};

export default About;