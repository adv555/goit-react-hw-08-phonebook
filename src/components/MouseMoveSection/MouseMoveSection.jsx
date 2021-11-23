import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const MouseMoveSection = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const mainEl = useRef(null);
  const handleMouseMove = e => {
    setMousePosition({ left: e.pageX, top: e.pageY });
    let evtX = e.pageX;
    let evtY = e.pageY;
    console.log(mousePosition);
    console.log(evtX);
    console.log(evtY);

    return { evtX, evtY };
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
