import { State } from '../redux/themeReducer';
import './Contacts.sass';

const Contacts = (state: State): JSX.Element => {
  return (
    <div className='contacts-list'>
      <span style={state.theme.boldText}>
        +995 574 895 822 (Georgia)
      </span>
      <a href='mailto:ninatorgunakova@gmail.com' target='_blank' rel='noreferrer' style={state.theme.boldText}>
        ninatorgunakova@gmail.com
      </a>
      <span>
        <b style={state.theme.boldText}>tg: </b>
        <a href='https://t.me/seagullNina' target='_blank' rel='noreferrer' style={state.theme.text}>
          @seagullNina
        </a>
      </span>
      <span>
        <b style={state.theme.boldText}>linkedIn: </b>
        <a href='https://www.linkedin.com/in/nina-torgunakova/' target='_blank' rel='noreferrer' style={state.theme.text}>
          nina-torgunakova
        </a>
      </span>
      <span>
        <b style={state.theme.boldText}>gitHub: </b>
        <a href='https://github.com/ninaTorgunakova' target='_blank' rel='noreferrer' style={state.theme.text}>
          ninaTorgunakova
        </a>
      </span>
      <span>
        <b style={state.theme.boldText}>inst: </b>
        <a href='https://www.instagram.com/nina_seagull/' target='_blank' rel='noreferrer' style={state.theme.text}>
          nina_seagull
        </a>
      </span>
    </div>
  );
};

export default Contacts;
