import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as BookmarkIconEmpty } from './../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from './../../assets/icon-bookmark-full.svg';
import { ReactComponent as PlayIcon } from './../../assets/icon-play.svg';
import { bookmark } from '../../store/showsSlice';
import { useDispatch } from 'react-redux';
import movieIcon from './../../assets/icon-category-movie.svg';
import tvSeriesIcon from './../../assets/icon-category-tv.svg';

import './trendingCard.scss';

const TrendingCard = ({ item }) => {
  const dispatch = useDispatch();
  const {
    title,
    category,
    isBookmarked,
    rating,
    year,
    thumbnail: {
      trending: {
        // small: smallBackground,
        large: largeBackground,
      },
    },
  } = item;

  return (
    <motion.div
      className="trendingCard"
      style={{
        backgroundImage: `url(${largeBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <span className="icon">
        {isBookmarked ? (
          <BookmarkIconFull
            className="bookmarkIcon"
            onClick={() => dispatch(bookmark(title))}
          />
        ) : (
          <BookmarkIconEmpty
            className="bookmarkIcon"
            onClick={() => dispatch(bookmark(title))}
          />
        )}
      </span>
      <span className="play">
        <PlayIcon className="playIcon" />
        <p>play</p>
      </span>
      <div className="cardBody">
        <div className="info">
          <span>{year}</span>
          <span className="dot"></span>
          <span className="category">
            {category === 'Movie' ? (
              <img src={movieIcon} alt="movieIcon" />
            ) : (
              <img src={tvSeriesIcon} alt="tv series icon" />
            )}
            {category}
          </span>
          <span className="dot"></span>
          <span>{rating}</span>
        </div>
        <div className="title">{title}</div>
      </div>
    </motion.div>
  );
};

export default TrendingCard;
