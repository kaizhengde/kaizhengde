import UnsplashMapContents from './content';
import Header from '../../header';
import Footer from '../../footer';
import SEO from '@/components/helper/seo';

const UnsplashMap = () => {
  return (
    <>
      <SEO
        title={"Unsplash Map"}
        description={"UnsplashMap allows you to load random photos from Unsplash and explore their locations on a map."}
      />

      <div>
        <Header title={"Unsplash Map"} />
        <UnsplashMapContents />
        <Footer />
      </div>
    </>
  )
}

export default UnsplashMap;