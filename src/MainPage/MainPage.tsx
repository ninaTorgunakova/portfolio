import { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import { THEMES, Theme } from '../redux/themes';
import { IMAGES } from '../redux/themes';
import { Action, applyTheme } from '../redux/themeActions';
import { State } from '../redux/themeReducer';
import { Dispatch } from 'redux';
import About from '../About/About';
import Works from '../Works/Works';
import Contacts from '../Contacts/Contacts';
import './MainPage.sass';
import LoadingSpinner from '../Spinner/Spinner';

const MainPage = (): JSX.Element => {
  const ABOUT_TAB_INDEX = 0;
  const WORKS_TAB_INDEX = 1;
  const CONTACTS_TAB_INDEX = 2;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [isImagesLoading, setImagesLoading] = useState(true);

  const dispatch: Dispatch<Action> = useDispatch();
  const theme: Theme = useSelector((state: State) => state.theme);

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowRight') {
      toNextPhoto();
    } else if (event.key === 'ArrowLeft') {
      toPreviousPhoto();
    }
  };

  useEffect(() => {
    const loadImage = (image: { url: string; }) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = error => reject(error);
      });
    }

    Promise.all(IMAGES.map(image => loadImage(image))).finally(() => {
      setImagesLoading(false);
      window.addEventListener('keydown', handleKeyDown);
    });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex]);

  const toPreviousPhoto = (): void => {
    const index: number = currentImageIndex === 0 ? IMAGES.length - 1 : currentImageIndex - 1;
    switchPhoto(index);
  };

  const toNextPhoto = (): void => {
    const index: number = currentImageIndex === IMAGES.length - 1 ? 0 : currentImageIndex + 1;
    switchPhoto(index);
  };

  const changeTheme = (theme: Theme): void => {
    dispatch(applyTheme(theme));
  };

  const switchPhoto = (index: number): void => {
    setImagesLoading(true);
    setCurrentImageIndex(index);
    setTimeout(() => {
      changeTheme(THEMES[index]);
      setImagesLoading(false);
    }, 400);
  };

  return (
    <div className='main-page' style={theme.mainPage}>
      <div className='gallery'>
        {isImagesLoading && <LoadingSpinner/>}
        <div className={'photo-container ' + (isImagesLoading ? 'loading' : '')}>
          <div className='photo-side' onClick={toPreviousPhoto}></div>
          <div className='photo-side' onClick={toNextPhoto}></div>
          <img src={IMAGES[currentImageIndex].url} alt='' className='photo'/>
        </div>
        <div className='photo-buttons'>
          <button className='btn-left'
              style={theme.button}
              onClick={toPreviousPhoto}
              disabled={isImagesLoading}>
            <GrPrevious></GrPrevious>
          </button>
          <button className='btn-right'
              style={theme.button}
              onClick={toNextPhoto}
              disabled={isImagesLoading}>
            <GrNext></GrNext>   
          </button>
        </div>
      </div>
      <div className='content'>
        <div className='tabs'>
          <button className='tab-btn'
              style={(currentTabIndex === ABOUT_TAB_INDEX ? theme.tabsActive : theme.tabs)}
              onClick={() => setCurrentTabIndex(0)}>
            About me
          </button>
          <button className='tab-btn'
              style={(currentTabIndex === WORKS_TAB_INDEX ? theme.tabsActive : theme.tabs)}
              onClick={() => setCurrentTabIndex(1)}>
            My projects
          </button>
          <button className='tab-btn'
              style={(currentTabIndex === CONTACTS_TAB_INDEX ? theme.tabsActive : theme.tabs)}
              onClick={() => setCurrentTabIndex(2)}>
            Contacts
          </button>
        </div>
        <div className='section' style={theme.contentSection}>
          {currentTabIndex === ABOUT_TAB_INDEX && <About theme={theme}></About>}
          {currentTabIndex === WORKS_TAB_INDEX && <Works theme={theme}></Works>}
          {currentTabIndex === CONTACTS_TAB_INDEX && <Contacts theme={theme}></Contacts>}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
