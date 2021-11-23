import Hero from 'components/Hero';
import { useEffect } from 'react';
import WelcomeBlock from 'components/WelcomeBlock';
// import background from 'images/bg.png';

const HomePage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#EDF2F0';
    // document.body.style.backgroundImage = ` url(${background})`;
    return () => {
      document.body.style.backgroundColor = '#263238';
    };
  }, []);

  return (
    <>
      <Hero title={'Home page'} />
      <WelcomeBlock />
    </>
  );
};
export default HomePage;
