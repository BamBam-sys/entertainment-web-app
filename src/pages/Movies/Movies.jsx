import React from 'react';
import { Nav, CardList, SearchInput } from '../../components';
import { useSelector } from 'react-redux';
import './movies.scss';
import { selectMovies, selectSearching } from './../../store/showsSlice';

const Movies = () => {
  const state = useSelector((state) => state);
  const movies = selectMovies(state);
  const searching = selectSearching(state);

  return (
    <div className="movies grid container">
      <Nav />
      <SearchInput placeholder={'Search for movies'} data={movies} />
      {!searching && <CardList data={movies} headingText={'Movies'} />}
    </div>
  );
};

export default Movies;
