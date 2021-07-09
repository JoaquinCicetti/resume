import React from "react";
import { useSpring, animated } from "react-spring";
import './Container.scss'


export const Container: React.FC = props => {

  const animatedStyles = useSpring({
    to: {
      boxShadow: '-5px -5px 20px #FFFFFF, 5px 5px 20px rgba(174, 174, 192, 0.5)'
    },
    from: {
      boxShadow: '0px -0px 0px #FFFFFF, 0px 0px 0px rgba(174, 174, 192, 0.5)'
    },
  });

  return <animated.div style={animatedStyles} className='container'>
    {props.children}
  </ animated.div >

}