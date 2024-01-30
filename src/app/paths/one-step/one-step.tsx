import OneStepContents from './one-step-contents';
import Header from '../../header';
import Footer from '../../footer';
import { useEffect } from 'react';

const OneStep = () => {
  useEffect(() => {
    document.title = 'Unsplash Map';
  }, []);

  return (
    <div>
      <Header />
      <OneStepContents />
      <Footer />
    </div>
  )
}

export default OneStep;