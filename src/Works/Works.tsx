import { State } from '../redux/themeReducer';
import './Works.sass';

const Works = (state: State) => {
  return (
    <div className="work-section" style={state.theme.scrollBar}>
      <span style={state.theme.headers}>It is header2</span>
      <span style={state.theme.text}>It is text</span>
      <span style={state.theme.boldText}>It is bold text</span>
      <span style={state.theme.links}>It is link</span>
    </div>
  );
};

export default Works;