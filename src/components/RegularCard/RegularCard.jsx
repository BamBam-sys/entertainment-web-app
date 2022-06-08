import React from 'react';
import { ReactComponent as MovieIcon } from './../../assets/icon-category-movie.svg';
import { ReactComponent as TvSeriesIcon } from './../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkIconEmpty } from './../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from './../../assets/icon-bookmark-full.svg';
import { ReactComponent as PlayIcon } from './../../assets/icon-play.svg';

import './regularCard.scss';

const RegularCard = ({ item }) => {
  const {
    title,
    category,
    isBookmarked,
    rating,
    year,
    thumbnail: {
      regular: {
        // small: smallBackground,
        // medium: meidumBackground,
        large: largeBackground,
      },
    },
  } = item;
  return (
    <div className="regularCard">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${largeBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <span className="play">
          <PlayIcon className="playIcon" />
          <p>play</p>
        </span>
        <span className="icon">
          {isBookmarked ? (
            <BookmarkIconFull className="bookmarkIcon" />
          ) : (
            <BookmarkIconEmpty className="bookmarkIcon" />
          )}
        </span>
      </div>
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
