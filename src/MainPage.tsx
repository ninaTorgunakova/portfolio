import React from 'react';
import './MainPage.sass';
import { GrNext, GrPrevious } from 'react-icons/gr';

const MainPage = () => {
  const images = [{
      url: "photos/gray.JPG"
    }, {
      url: "photos/blue.JPG"
    }, {
      url: "photos/white.JPG"
    }, {
      url: "photos/red.JPG"
    }, {
      url: "photos/yellow.JPG"
    }
  ];
  const [currentImage, setCurrentImage] = React.useState(0);
  const [currentTab, setCurrentTab] = React.useState(0);
  const toPreviousPhoto = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }
  const toNextPhoto = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  return (
    <div className="main-page">
      <div className="gallery">
        <img src={images[currentImage].url} alt="" loading="eager" className="gallery-photo"/>
        <div className="gallery-buttons">
          <button className="gallery-button" onClick={toPreviousPhoto}>
            <GrPrevious></GrPrevious>
          </button>
          <button className="gallery-button" onClick={toNextPhoto}>
            <GrNext></GrNext>   
          </button>
        </div>
      </div>
      <div className="content">
        <div className="content-tabs">
          <button className={'content-tab-button ' + (currentTab === 0 ? 'active' : '')} onClick={() => setCurrentTab(0)}>Обо мне</button>
          <button className={'content-tab-button ' + (currentTab === 1 ? 'active' : '')} onClick={() => setCurrentTab(1)}>Мои проекты</button>
          <button className={'content-tab-button ' + (currentTab === 2 ? 'active' : '')} onClick={() => setCurrentTab(2)}>Мои статьи</button>
        </div>
        <div>
          {currentTab === 0 && <div className="about">0</div>}
          {currentTab === 1 && <div className="projects">1</div>}
          {currentTab === 2 && <div className="articles">2</div>}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
