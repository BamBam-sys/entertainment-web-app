import React from 'react';
import { CardList, Nav, SearchInput } from '../../components';
import { useSelector } from 'react-redux';
import {
  selectBookmarkedMovies,
  selectBookmarkedTvSeries,
  selectSearching,
} from '../../store/showsSlice';

const Bookmarked = () => {
  const state = useSelector((state) => state);
  const movies = selectBookmarkedMovies(state);
  const tvSeries = selectBookmarkedTvSeries(state);
  const searching = selectSearching(state);

  console.log('hi');

  return (
    <div className="container grid">
      <Nav />
      <SearchInput
        placeholder={'Search for bookmarked shows'}
        data={[...movies, ...tvSeries]}
      />
      {!searching && (
        <>
          <CardList data={movies} headingText={'Bookmarked Movies'} />
          <CardList data={tvSeries} headingText={'Bookmarked TV Series'} />
        </>
      )}
    </div>
  );
};

export default Bookmarked;
