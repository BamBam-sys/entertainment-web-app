import React from 'react';
import { Nav, CardList, SearchInput } from '../../components';
import data from '../../data.json';
import './movies.scss';

const Movies = () => {
  const movies = data.filter((item) => item.category === 'Movie');

  return (
    <div className="movies grid container">
      <Nav />
      <SearchInput placeholder={'Search for movies'} />
      <CardList data={movies} headingText={'Movies'} />
    </div>
  );
};

export default Movies;
