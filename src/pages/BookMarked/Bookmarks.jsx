import React from 'react';
import { CardList, Nav, SearchInput } from '../../components';
import data from '../../data.json';

const Bookmarked = () => {
  const movies = data.filter(
    (item) => item.category === 'Movie' && item.isBookmarked === true
  );
  const tvSeries = data.filter(
    (item) => item.category === 'TV Series' && item.isBookmarked === true
  );

  return (
    <div className="container grid">
      <Nav />
      <SearchInput placeholder={'Search for bookmarked shows'} />
      <CardList data={movies} headingText={'Bookmarked Movies'} />
      <CardList data={tvSeries} headingText={'Bookmarked TV Series'} />
    </div>
  );
};

export default Bookmarked;
