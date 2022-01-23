import { State } from '../redux/themeReducer';
import './Contacts.sass';

const Contacts = (state: State) => {
  return (
    <div>
      <span style={state.theme.boldText}>It is bold text</span>
      <span style={state.theme.links}>It is link</span>
    </div>
  );
};

export default Contacts;