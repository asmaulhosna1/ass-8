import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const RouteTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, [location]);

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('fadeOut');
    }
  }, [children, displayChildren]);

  return (
    <motion.div
      onAnimationComplete={() => {
        if (transitionStage === 'fadeOut') {
          setDisplayChildren(children);
          setTransitionStage('fadeIn');
        }
      }}
      animate={transitionStage}
      initial="fadeIn"
      variants={{
        fadeIn: {
          opacity: 1,
          transition: {
            duration: 0.3
          }
        },
        fadeOut: {
          opacity: 0,
          transition: {
            duration: 0.3
          }
        }
      }}
    >
      {displayChildren}
    </motion.div>
  );
};

export default RouteTransition;