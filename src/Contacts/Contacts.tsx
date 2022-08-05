import { State } from '../redux/themeReducer';
import './Contacts.sass';

const Contacts = (state: State) => {
  return (
    <div className='contacts-content'>
      <div style={state.theme.boldText} className='phone'>+7 913 450 58 02</div>
      <div style={state.theme.boldText} className='email'>ninatorgunakova@gmail.com</div>
      <div className='contact-icons'>
        <a href='https://github.com/ninaTorgunakova' className='link' target='_blank' rel='noreferrer'>
          <img src='icons/github.png' alt='' className='contact-icon'></img>
        </a>
        <a href='https://vk.com/seagull_nina' className='link' target='_blank' rel='noreferrer'>
          <img src='icons/vk.png' alt='' className='contact-icon'></img>
        </a>
        <a href='https://leetcode.com/Nina_Torgunakova/' className='link' target='_blank' rel='noreferrer'>
          <img src='icons/leetcode.png' alt='' className='contact-icon'></img>
        </a>
      </div>
    </div>
  );
};

export default Contacts;