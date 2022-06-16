import React, { useEffect } from 'react';
import { CardList, Nav, SearchInput, Trending } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import data from '../../data.json';
import './home.scss';
import {
  selectSearching,
  selectShows,
  selectTrendingShows,
  showsReceived,
} from '../../store/showsSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showsReceived(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state = useSelector((state) => state);
  const shows = selectShows(state);
  const trending = selectTrendingShows(state);
  const searching = selectSearching(state);

  return (
    <div className="home container grid">
      <Nav />
      <SearchInput
        placeholder={'Search for movies or TV series'}
        data={shows}
      />
      {!searching && (
        <>
          <Trending data={trending} />
          <CardList data={shows} headingText={'Recommended for you'} />
        </>
      )}
    </div>
  );
};

export default Home;
