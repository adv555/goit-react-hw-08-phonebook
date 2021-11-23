import AuthButton from 'components/AuthButton';
import s from 'components/WelcomeBlock/WelcomeBlock.module.scss';
import WelcomeBlockTitle from 'components/WelcomeBlockTitle';
import MouseMoveSection from 'components/MouseMoveSection';
// import { ReactComponent as BookLogo } from 'images/book.svg';
// import background from 'images/bg.png';

const WelcomeBlock = () => {
  return (
    <MouseMoveSection>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.welcome}>
            <span>Welcome to</span>
            <WelcomeBlockTitle />
            {/* <h1 className={s.header}>
              Phoneb<span>oo</span>k
            </h1> */}
          </div>
          <p className={s.about}>
            <span>"Keep all your phone contacts at one place"</span>
          </p>
          <p className={s.toStart}>
            Please
            <span className={s.button}>
              <AuthButton navTo="login" />
            </span>
            or
            <span className={s.button}>
              <AuthButton navTo="register" />
            </span>
            to start.
          </p>
        </div>
        <div className={s.bookLogo}>{/* <BookLogo /> */}</div>
      </div>
    </MouseMoveSection>
  );
};
export default WelcomeBlock;
