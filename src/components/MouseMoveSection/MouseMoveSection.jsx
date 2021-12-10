import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { changeEyesRotation } from 'redux/mouse/actions';

import PropTypes from 'prop-types';

const MouseMoveSection = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });

  const mainEl = useRef(null);
  const dispatch = useDispatch();

  const handleMouseMove = e => {
    setMousePosition({ left: e.pageX, top: e.pageY });

    let x = mainEl.current.getBoundingClientRect().left + mainEl.current.clientWidth / 2;
    let y = mainEl.current.getBoundingClientRect().top + mainEl.current.clientHeight / 2;
    let radian = Math.atan2(mousePosition.left - x, mousePosition.top - y);
    let rotation = radian * (180 / Math.PI) * -1 + 360;

    dispatch(changeEyesRotation(rotation));
  };

  return (
    <div
      className="container"
      ref={mainEl}
      style={{ left: mousePosition.left, top: mousePosition.top }}
      onMouseMove={e => handleMouseMove(e)}
    >
      {children}
    </div>
  );
};
MouseMoveSection.propTypes = {
  children: PropTypes.node,
};
export default MouseMoveSection;
