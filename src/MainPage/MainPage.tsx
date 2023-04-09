import { useEffect, useState } from 'react';

import { THEMES, Theme, IMAGES, $theme } from '../state/themes';
import About from '../About/About';
import Works from '../Projects/Projects';
import LoadingSpinner from '../Spinner/Spinner';

import './MainPage.sass';
import { useStore } from '@nanostores/react';
import Articles from '../Articles/Articles';
import Highlights from '../Highlights/Highlights';

import '../styles/Works.sass';
import '../styles/Work.sass';

const MainPage = (): JSX.Element => {
  const ABOUT_TAB_INDEX = 0;
  const WORKS_TAB_INDEX = 1;
  const ARTICLES_TAB_INDEX = 2;
  const HIGHLIGHTS_TAB_INDEX = 3;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [isImagesLoading, setImagesLoading] = useState(true);

  const theme: Theme = useStore($theme);

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
    $theme.set(theme);
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
              aria-label='left'
              style={theme.button}
              onClick={toPreviousPhoto}
              disabled={isImagesLoading}>
            <i style={theme.arrow} className='arrow left'></i>
          </button>
          <button className='btn-right'
              aria-label='right'
              style={theme.button}
              onClick={toNextPhoto}
              disabled={isImagesLoading}>
            <i style={theme.arrow} className='arrow right' ></i>
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
              style={(currentTabIndex === ARTICLES_TAB_INDEX ? theme.tabsActive : theme.tabs)}
              onClick={() => setCurrentTabIndex(2)}>
            Articles
          </button>
          <button className='tab-btn'
              style={(currentTabIndex === HIGHLIGHTS_TAB_INDEX ? theme.tabsActive : theme.tabs)}
              onClick={() => setCurrentTabIndex(3)}>
            Highlights
          </button>
        </div>
        <div className='section' style={theme.contentSection}>
          {currentTabIndex === ABOUT_TAB_INDEX && <About />}
          {currentTabIndex === WORKS_TAB_INDEX && <Works />}
          {currentTabIndex === ARTICLES_TAB_INDEX && <Articles />}
          {currentTabIndex === HIGHLIGHTS_TAB_INDEX && <Highlights />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
