import { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { themes, Theme } from '../redux/themes';
import { images } from '../redux/themes';
import { useDispatch, useSelector } from 'react-redux';
import { Action, applyTheme } from '../redux/themeActions';
import { State } from '../redux/themeReducer';
import { Dispatch } from 'redux';
import About from '../About/About';
import Works from '../Works/Works';
import Contacts from '../Contacts/Contacts';
import './MainPage.sass';

const MainPage = (): JSX.Element => {
  const ABOUT_TAB_INDEX = 0;
  const WORKS_TAB_INDEX = 1;
  const CONTACTS_TAB_INDEX = 2;

  const [currentImage, setCurrentImage] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const [imgsLoading, setImgsLoading] = useState(true);
  const dispatch: Dispatch<Action> = useDispatch();

  useEffect(() => {
    const loadImage = (image: { url: string; }) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = error => reject(error);
      });
    }
    Promise.all(images.map(image => loadImage(image)))
    .then(() => setImgsLoading(false))
  }, []);

  const toPreviousPhoto = (): void => {
    const index = currentImage === 0 ? images.length - 1 : currentImage - 1;
    switchPhoto(index);
  };

  const toNextPhoto = (): void => {
    const index = currentImage === images.length - 1 ? 0 : currentImage + 1;
    switchPhoto(index);
  };

  const changeTheme = (theme: Theme): void => {
    dispatch(applyTheme(theme));
  };

  const theme: Theme = useSelector((state: State) => state.theme);

  const switchPhoto = (index: number): void => {
    setImgsLoading(true);
    setCurrentImage(index);
    setTimeout(() => {
      const theme = themes[index];
      changeTheme(theme)
      setImgsLoading(false);
    }, 300);
  };

  return (
    <div className='main-page' style={theme.mainPage}>
      <div className='gallery'>
        <div className={'photo-container ' + (imgsLoading ? 'loading' : '')}>
          <div className='photo-side' onClick={toPreviousPhoto}></div>
          <div className='photo-side' onClick={toNextPhoto}></div>
          <img src={images[currentImage].url} alt='' className='photo'/>
        </div>
        <div className='photo-buttons'>
          <button className='btn-left' style={theme.button} onClick={toPreviousPhoto}>
            <GrPrevious></GrPrevious>
          </button>
          <button className='btn-right' style={theme.button} onClick={toNextPhoto}>
            <GrNext></GrNext>   
          </button>
        </div>
      </div>
      <div className='content'>
        <div className='tabs'>
          <button className='tab-btn'
              style={(currentTab === ABOUT_TAB_INDEX ? theme.tabsActive : theme.tabs)}
              onClick={() => setCurrentTab(0)}>
            About me
          </button>
          <button className='tab-btn'
              style={(currentTab === WORKS_TAB_INDEX ? theme.tabsActive : theme.tabs)}
              onClick={() => setCurrentTab(1)}>
            My projects
          </button>
          <button className='tab-btn'
              style={(currentTab === CONTACTS_TAB_INDEX ? theme.tabsActive : theme.tabs)}
              onClick={() => setCurrentTab(2)}>
            Contacts
          </button>
        </div>
        <div className='section' style={theme.contentSection}>
          {currentTab === ABOUT_TAB_INDEX && <About theme={theme}></About>}
          {currentTab === WORKS_TAB_INDEX && <Works theme={theme}></Works>}
          {currentTab === CONTACTS_TAB_INDEX && <Contacts theme={theme}></Contacts>}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
