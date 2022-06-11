import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './trending.scss';
import { TrendingCard, Heading } from '../../components';
import { selectTrendingShows } from '../../store/showsSlice';
import { useSelector } from 'react-redux';

const Trending = () => {
  const state = useSelector((state) => state);
  const trending = selectTrendingShows(state);
  // const trending = data.filter((item) => item.isTrending === true);

  const [width, setWidth] = useState(0);

  const carouselRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setWidth(
      carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth
    );
  });

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
