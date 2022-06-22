import React, { useEffect } from 'react';
import { CardList, Nav, SearchInput, Trending } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import {
  loading,
  selectSearching,
  selectShows,
  selectTrendingShows,
  showsReceived,
} from '../../store/showsSlice';
import Loading from './../../components/Loading/Loading';
import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const {
    persistedReducer: {
      shows: { isLoading },
    },
  } = state;
  const shows = selectShows(state);
  const trending = selectTrendingShows(state);
  const searching = selectSearching(state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loading(true));
        const querySnapshot = await getDocs(collection(database, 'shows'));
        let shows = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          shows.push({ ...doc.data(), id: doc.id });
        });
        dispatch(showsReceived(shows));
        dispatch(loading(false));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home container grid">
      <Nav />
      <SearchInput
        placeholder={'Search for movies or TV series'}
        data={shows}
      />
      {isLoading ? (
        <Loading text={'Loading shows...'} />
      ) : (
        !searching && (
          <>
            <Trending data={trending} />
            <CardList data={shows} headingText={'Recommended for you'} />
          </>
        )
      )}
    </div>
  );
};

export default Home;
