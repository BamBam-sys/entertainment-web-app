import React from 'react';
import { ReactComponent as MovieIcon } from './../../assets/icon-category-movie.svg';
import { ReactComponent as TvSeriesIcon } from './../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkIconEmpty } from './../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from './../../assets/icon-bookmark-full.svg';
import { ReactComponent as PlayIcon } from './../../assets/icon-play.svg';

import './regularCard.scss';
import { bookmark } from '../../store/showsSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const RegularCard = ({ item }) => {
  const dispatch = useDispatch();

  const {
    title,
    category,
    isBookmarked,
    rating,
    year,
    thumbnail: {
      regular: {
        small: smallBackground,
        medium: mediumBackground,
        large: largeBackground,
      },
    },
  } = item;

  const bgStyles = {
    large: `url(${largeBackground})`,
    medium: `url(${mediumBackground})`,
    small: `url(${smallBackground})`,
  };

  return (
    <div className="regularCard">
      <Background className="bg" bg={bgStyles}>
        <span className="play">
          <PlayIcon className="playIcon" />
          <p>play</p>
        </span>
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
      </Background>
      <div className="cardBody">
        <div className="info">
          <span>{year}</span>
          <span className="dot"></span>
          <span className="category">
            {category === 'Movie' ? <MovieIcon /> : <TvSeriesIcon />}
            {category}
          </span>
          <span className="dot"></span>
          <span>{rating}</span>
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default RegularCard;

const Background = styled.div`
  background: ${(props) => props.bg.large};
  background-position: center;
  background-size: cover;

  @media (max-width: 48em) {
    background: ${(props) => props.bg.medium};
    background-position: center;
    background-size: cover;
  }

  @media (max-width: 34em) {
    background: ${(props) => props.bg.small};
    background-position: center;
    background-size: cover;
  }
`;
