import React from 'react';
import { CardList, Nav, Search, SearchInput } from '../../components';
import { useSelector } from 'react-redux';
import { selectSearching, selectTvSeries } from '../../store/showsSlice';

const TvSeries = () => {
  const state = useSelector((state) => state);
  const tvSeries = selectTvSeries(state);
  const searching = selectSearching(state);

  return (
    <div className="container grid">
      <Nav />
      <SearchInput placeholder={'Search for TV Series'} />
      {searching ? (
        <Search data={tvSeries} />
      ) : (
        <CardList data={tvSeries} headingText={'TV Series'} />
      )}
    </div>
  );
};

export default TvSeries;
