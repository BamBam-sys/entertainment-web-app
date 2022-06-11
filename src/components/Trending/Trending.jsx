import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import data from '../../data.json';
import './trending.scss';
import { TrendingCard, Heading } from '../../components';

const Trending = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  const trending = data.filter((item) => item.isTrending === true);
  return (
    <div className="trendingSection" ref={carouselRef}>
      <Heading text={'Trending'} />
      <motion.div className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="innerCarousel"
        >
          {trending.map((item) => (
            <TrendingCard key={item.title} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Trending;
