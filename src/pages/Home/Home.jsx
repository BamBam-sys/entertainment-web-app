import React, { useEffect } from 'react';
import { CardList, Nav, SearchInput, Trending } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import {
  loading,
  selectLoadingState,
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
  const loadingState = selectLoadingState(state);
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
          shows.push({ ...doc.data(), id: doc.id });
        });
        dispatch(showsReceived(shows));
        dispatch(loading(false));
      } catch (error) {
        console.log(error, 'errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
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
      {loadingState ? (
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

//todo
/*1. each user signed up user should have their own list of bookmarked shows 
  - in the database, each user should have an array of bookmarked shows linked to the user.
  - when the user logs in, user's list of bookmarked shows will be fetched, the list of all shows will then be looped through,
     and for every show bookmarked by the user, same show's "isBookmarked" property will be set to true.

  2. when bookmarking a show to enusure that the visual indication of a show being bookmarked happens almost instantly,
    the action should be dispatched to the store first before the call to the database is made and if for any reason the call to 
    the database fails, the dispactched action should be rolled back.
  
  3. create pop-up modals for errors.
*/
