import React from 'react';
import { CardList, Nav, Search, SearchInput, Trending } from '../../components';
import { useSelector } from 'react-redux';
import './home.scss';
import {
  selectSearching,
  selectShows,
  selectTrendingShows,
} from '../../store/showsSlice';

const Home = () => {
  const state = useSelector((state) => state);

  const shows = selectShows(state);
  const trending = selectTrendingShows(state);
  const searching = selectSearching(state);

  // console.log('Home rendered');

  return (
    <div className="home container grid">
      <Nav />
      <SearchInput placeholder={'Search for movies or TV series'} />
      {searching ? (
        <Search data={shows} />
      ) : (
        <>
          <Trending data={trending} />
          <CardList data={shows} headingText={'recommended for you'} />
        </>
      )}
    </div>
  );
};

export default Home;
