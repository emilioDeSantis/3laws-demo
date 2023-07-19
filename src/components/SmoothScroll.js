import React from "react";
// import { useSpring, animated } from "react-spring";

function SmoothScrollComponent({ children }) {
  // Setting the scroll animation
  const springStyle = useSpring({
    from: { transform: "translate3d(0, 40px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div style={springStyle}>
      {children}
    </animated.div>
  );
}

export default SmoothScrollComponent;
