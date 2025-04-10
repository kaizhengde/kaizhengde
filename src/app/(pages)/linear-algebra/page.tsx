import LinearAlgebraContents from './content';
import SEO from '@/components/helper/seo';

const LinearAlgebra = () => {
  return (
    <>
      <SEO
        title={"Linear Algebra"}
        description={"This page contains all the notes and materials used in the exercise sessions G-08."}
      />

      <LinearAlgebraContents />
    </>
  )
}

export default LinearAlgebra;