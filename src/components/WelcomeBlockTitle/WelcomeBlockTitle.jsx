import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { getRotation } from 'redux/mouse/selectors';
// import MouseMoveSection from 'components/MouseMoveSection/MouseMoveSection';
import s from 'components/WelcomeBlockTitle/WelcomeBlockTitle.module.scss';

const WelcomeBlockTitle = () => {
  const [styles, setStyles] = useState({});
  const eyeEl = useRef(null);

  const rotation = useSelector(getRotation);

  useEffect(() => {
    setStyles({
      eye: { transform: `rotate(${rotation}deg)` },
    });
  }, [rotation]);

  return (
    // <MouseMoveSection>
    <h1 className={s.box}>
      Phoneb
      <span className={s.span}>
        <span className={s.eye} ref={eyeEl} style={styles.eye}></span>
        <span className={s.eye} ref={eyeEl} style={styles.eye}></span>
      </span>
      k
    </h1>
    // </MouseMoveSection>
  );
};
export default WelcomeBlockTitle;
