import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as BookmarkIconEmpty } from './../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from './../../assets/icon-bookmark-full.svg';
import { ReactComponent as PlayIcon } from './../../assets/icon-play.svg';
import { bookmark } from '../../store/showsSlice';
import { useDispatch } from 'react-redux';
import movieIcon from './../../assets/icon-category-movie.svg';
import tvSeriesIcon from './../../assets/icon-category-tv.svg';

import styled from 'styled-components';
import './trendingCard.scss';
import { bookmarkShow } from '../../services/showsService';

const TrendingCard = ({ item }) => {
  const dispatch = useDispatch();
  const {
    title,
    category,
    isBookmarked,
    rating,
    year,
    thumbnail: {
      trending: { small: smallBackground, large: largeBackground },
    },
  } = item;

  const bgStyles = {
    large: `url(${largeBackground})`,
    small: `url(${smallBackground})`,
  };

  const handleBookmark = async (title) => {
    await bookmarkShow(title);
    dispatch(bookmark(title));
  };

  return (
    <Background className="trendingCard" bg={bgStyles}>
      <span className="icon">
        {isBookmarked ? (
          <BookmarkIconFull
            className="bookmarkIcon"
            onClick={() => handleBookmark(title)}
          />
        ) : (
          <BookmarkIconEmpty
            className="bookmarkIcon"
            onClick={() => handleBookmark(title)}
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
    </Background>
  );
};

export default TrendingCard;

const Background = styled(motion.div)`
  background: ${(props) => props.bg.large};
  background-position: center;
  background-size: cover;

  @media (max-width: 34em) {
    background: ${(props) => props.bg.small};
    background-position: center;
    background-size: cover;
  }
`;
