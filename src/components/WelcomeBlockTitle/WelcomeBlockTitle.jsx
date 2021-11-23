import { useState, useRef } from 'react';
import s from 'components/WelcomeBlockTitle/WelcomeBlockTitle.module.scss';

const WelcomeBlockTitle = () => {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [styles, setStyles] = useState({});
  const eyeEl = useRef(null);

  // console.log(mousePosition);
  // console.log(styles);

  const handleMouseMove = e => {
    // console.log(eyeEl);
    // console.log(eyeEl.current.getBoundingClientRect());
    setMousePosition({ left: e.pageX, top: e.pageY });

    let x = eyeEl.current.getBoundingClientRect().left + eyeEl.current.clientWidth / 2;
    let y = eyeEl.current.getBoundingClientRect().top + eyeEl.current.clientHeight / 2;
    let radian = Math.atan2(e.pageX - x, e.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 270;
    console.log(rotation);
    setStyles({
      eye: { transform: `rotate(${rotation}deg)` },
    });
  };

  return (
    <h1
      className={s.box}
      onMouseMove={e => handleMouseMove(e)}
      style={{ left: mousePosition.left, top: mousePosition.top }}
    >
      Phoneb
      <span className={s.span}>
        <span className={s.eye} ref={eyeEl} style={styles.eye}></span>
        <span className={s.eye} ref={eyeEl} style={styles.eye}></span>
      </span>
      k
    </h1>
  );
};
export default WelcomeBlockTitle;
