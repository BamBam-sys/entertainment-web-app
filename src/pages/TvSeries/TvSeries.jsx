import React from 'react';
import { CardList, Nav, SearchInput } from '../../components';
import { useSelector } from 'react-redux';
import { selectSearching, selectTvSeries } from '../../store/showsSlice';

const TvSeries = () => {
  const state = useSelector((state) => state);
  const tvSeries = selectTvSeries(state);
  const searching = selectSearching(state);

  return (
    <div className="container grid">
      <Nav />
      <SearchInput placeholder={'Search for TV Series'} data={tvSeries} />
      {!searching && <CardList data={tvSeries} headingText={'TV Series'} />}
    </div>
  );
};

export default TvSeries;
