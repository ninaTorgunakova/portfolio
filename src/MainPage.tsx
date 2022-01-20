import { useEffect, useState } from 'react';
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
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const [imgsLoading, setImgsLoading] = useState(true);

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

  const switchPhoto = (index: number) => {
    setImgsLoading(true);
    setCurrentImage(index);
    setTimeout(() => {
      setImgsLoading(false);
    }, 500);
  }

  return (
    <div className="main-page">
      <div className="gallery">
        <img src={images[currentImage].url} alt="" className={'gallery-photo ' + (imgsLoading ? 'loading' : '')}/> 
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
