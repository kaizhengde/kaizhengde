import HomeContents from './content';
import Header from './header';
import Footer from './footer';
import SEO from '@/components/helper/seo';

const Home = () => {
  return (
    <>
      <SEO
        title={"Kai Zheng"}
        description={"You have power over your mind — not outside events. Realize this, and you will find strength."}
      />

      <div>
        <Header />
        <HomeContents />
        <Footer />
      </div>
    </>
  )
}

export default Home;