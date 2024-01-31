import ThesisContents from './thesis-contents.tsx';
import Header from '../../header';
import Footer from '../../footer';
import { useEffect } from 'react';

const Thesis = () => {
  useEffect(() => {
    document.title = 'Thesis';
  }, []);

  return (
    <div>
      <Header title={"Thesis"} />
      <ThesisContents />
      <Footer />
    </div>
  )
}

export default Thesis;