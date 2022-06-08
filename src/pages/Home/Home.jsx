import React from 'react';
import { CardList, Nav, SearchInput, Trending } from '../../components';
import data from '../../data.json';
import './home.scss';

const Home = () => {
  return (
    <div className="home container grid">
      <Nav />
      <SearchInput placeholder={'Search for movies or TV series'} />
      <Trending />
      <CardList data={data} headingText={'recommended for you'} />
    </div>
  );
};

export default Home;
