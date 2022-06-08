import React from 'react';
import { CardList, Nav, SearchInput } from '../../components';
import data from '../../data.json';

const TvSeries = () => {
  const tvSeries = data.filter((item) => item.category === 'TV Series');

  return (
    <div className="container grid">
      <Nav />
      <SearchInput placeholder={'Search for TV Series'} />
      <CardList data={tvSeries} headingText={'TV Series'} />
    </div>
  );
};

export default TvSeries;
