import LinearAlgebraContents from './linear-algebra-contents';
import Header from '../header';
import Footer from '../footer';
import { useEffect } from 'react';

const LinearAlgebra = () => {
  useEffect(() => {
    document.title = 'Linear Algebra';
  }, []);

  return (
    <div>
      <Header />
      <LinearAlgebraContents />
      <Footer />
    </div>
  )
}

export default LinearAlgebra;