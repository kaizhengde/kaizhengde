import OneStepContents from './one-step-contents';
import Header from '../../header';
import Footer from '../../footer';
import SEO from '@/components/helper/seo';

const OneStep = () => {
  return (
    <>
      <SEO
        title={"1 Step"}
        description={"1 Step is the app that genuinely got me into iOS engineering, which I built back in 2020."}
      />

      <div>
        <Header title={"1 Step"} />
        <OneStepContents />
        <Footer />
      </div>
    </>
  )
}

export default OneStep;