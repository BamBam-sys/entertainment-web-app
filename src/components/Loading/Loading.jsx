import React from 'react';
import { motion } from 'framer-motion';
import './loading.scss';

const Loading = ({ text }) => {
  return (
    <motion.div className="loading">
      <h2>{text}</h2>
      <motion.div
        className="loader"
        animate={{ rotate: 360 }}
        transition={{
          ease: 'linear',
          duration: 1,
          repeat: Infinity,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Loading;
