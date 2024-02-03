import LinearAlgebraContents from './linear-algebra-contents';
import Header from '../../header';
import Footer from '../../footer';
import SEO from '@/components/helper/seo';

const LinearAlgebra = () => {
  return (
    <>
      <SEO
        title={"Linear Algebra"}
        description={"This page contains all the notes and materials used in the exercise sessions G-08."}
      />

      <div>
        <Header title={"Linear Algebra"} />
        <LinearAlgebraContents />
        <Footer />
      </div>
    </>
  )
}

export default LinearAlgebra;