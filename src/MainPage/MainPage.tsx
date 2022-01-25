import { useEffect, useState } from 'react';
import './MainPage.sass';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { themes, Theme } from '../redux/themes';
import { images } from '../redux/images';
import { useDispatch, useSelector } from 'react-redux';
import { Action, applyTheme } from '../redux/themeActions';
import { Dispatch } from 'redux';
import About from '../About/About';
import Works from '../Works/Works';
import Contacts from '../Contacts/Contacts';

const MainPage = () => {
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
        loadImg.onerror = err => reject(err);
      });
    }
    Promise.all(images.map(image => loadImage(image)))
    .then(() => setImgsLoading(false))
  }, []);

  const toPreviousPhoto = () => {
    const index = currentImage === 0 ? images.length - 1 : currentImage - 1;
    switchPhoto(index);
  }
  const toNextPhoto = () => {
    const index = currentImage === images.length - 1 ? 0 : currentImage + 1;
    switchPhoto(index);
  }

  const changeTheme = (theme: any) => {
    dispatch(applyTheme(theme));
  }

  const theme: Theme = useSelector((state: any) => state.theme);

  const switchPhoto = (index: number) => {
    setImgsLoading(true);
    setCurrentImage(index);
    setTimeout(() => {
      const theme = themes[index];
      changeTheme(theme)
      setImgsLoading(false);
    }, 500);
  }

  return (
    <div className="main-page" style={theme.mainPage}>
      <div className="gallery">
        <img src={images[currentImage].url} alt="" className={'gallery-photo ' + (imgsLoading ? 'loading' : '')}/> 
        <div className="gallery-buttons">
          <button className="gallery-button" style={theme.button} onClick={toPreviousPhoto}>
            <GrPrevious></GrPrevious>
          </button>
          <button className="gallery-button" style={theme.button} onClick={toNextPhoto}>
            <GrNext></GrNext>   
          </button>
        </div>
      </div>
      <div className="content">
        <div className="content-tabs">
          <button className="content-tab-button" style={(currentTab === 0 ? theme.tabsActive : theme.tabs)} onClick={() => setCurrentTab(0)}>Обо мне</button>
          <button className="content-tab-button" style={(currentTab === 1 ? theme.tabsActive : theme.tabs)} onClick={() => setCurrentTab(1)}>Мои работы</button>
          <button className="content-tab-button" style={(currentTab === 2 ? theme.tabsActive : theme.tabs)} onClick={() => setCurrentTab(2)}>Контакты</button>
        </div>
        <div className="content-section" style={theme.contentSection}>
          {currentTab === 0 && <About theme={theme}></About>}
          {currentTab === 1 && <Works theme={theme}></Works>}
          {currentTab === 2 && <Contacts theme={theme}></Contacts>}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
