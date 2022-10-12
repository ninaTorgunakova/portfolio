import { State } from '../redux/themeReducer';
import './Contacts.sass';

const Contacts = (state: State) => {
  return (
    <div className='contacts-list'>
      <span style={state.theme.boldText}>+995 574 895 822 (Georgia)</span>
      <span style={state.theme.boldText}>ninatorgunakova@gmail.com</span>
      <a href="https://t.me/seagullNina" target="_blank" className="link" style={state.theme.boldText}>tg: @seagullNina</a>
      <div className='contact-icons'>
        <a href="https://www.linkedin.com/in/nina-torgunakova/" className="link" target="_blank">
          <img src="icons/linkedin.png" alt="" className="contact-icon"></img>
        </a>
        <a href='https://github.com/ninaTorgunakova' className='link' target='_blank' rel='noreferrer'>
          <img src='icons/github.png' alt='' className='contact-icon'></img>
        </a>
        <a href="https://www.instagram.com/nina_seagull/" className="link" target="_blank">
          <img src="icons/instagram.png" alt="" className="contact-icon"></img>
        </a>
      </div>
    </div>
  );
};

export default Contacts;