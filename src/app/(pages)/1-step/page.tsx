import OneStepContents from './content';
import SEO from '@/components/helper/seo';

const OneStep = () => {
  return (
    <>
      <SEO
        title={"1 Step"}
        description={"1 Step is the app that genuinely got me into iOS engineering, which I built back in 2020."}
      />

      <OneStepContents />
    </>
  )
}

export default OneStep;