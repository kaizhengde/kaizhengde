import UnsplashMapContents from './unsplash-map-contents';
import Header from '../../header';
import Footer from '../../footer';
import { useEffect } from 'react';

const UnsplashMap = () => {
  useEffect(() => {
    document.title = 'Unsplash Map';
  }, []);

  return (
    <div>
      <Header title={"Unsplash Map"} />
      <UnsplashMapContents />
      <Footer />
    </div>
  )
}

export default UnsplashMap;