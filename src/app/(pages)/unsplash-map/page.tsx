import UnsplashMapContents from './content';
import Header from '../../header';
import Footer from '../../footer';
import SEO from '@/components/helper/seo';

export const metadata = {
  title: "Unsplash Map",
  description: "UnsplashMap allows you to load random photos from Unsplash and explore their locations on a map.",
}

const UnsplashMap = () => {
  return (
    <UnsplashMapContents />
  )
}

export default UnsplashMap;