import ThesisContents from './thesis-contents.tsx';
import Header from '../../header';
import Footer from '../../footer';
import SEO from '@/components/helper/seo.tsx';

const Thesis = () => {
  return (
    <>
      <SEO
        title={"Thesis"}
        description={""}
      />

      <div>
        <Header title={"Thesis"} />
        <ThesisContents />
        <Footer />
      </div>
    </>
  )
}

export default Thesis;