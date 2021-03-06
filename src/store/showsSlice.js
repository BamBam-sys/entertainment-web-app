import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  list: [],
  searching: false,
  isLoading: false,
  searchParams: '',
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    showsReceived: (shows, action) => {
      shows.list = action.payload;
    },
    search: (shows, action) => {
      shows.searching = action.payload;
    },
    loading: (shows, action) => {
      shows.isLoading = action.payload;
    },
    bookmark: (shows, action) => {
      const index = shows.list.findIndex(
        (show) => show.title === action.payload
      );
      shows.list[index].isBookmarked = !shows.list[index].isBookmarked;
    },
  },
});

export const { showsReceived, search, bookmark, loading } = showsSlice.actions;

export default showsSlice.reducer;

//selectors
export const selectShows = (state) => {
  return state.persistedReducer.shows.list;
};

export const selectTrendingShows = createSelector(
  (state) => state.persistedReducer.shows.list,
  (trending) => trending.filter((item) => item.isTrending === true)
);

export const selectMovies = createSelector(
  (state) => state.persistedReducer.shows.list,
  (shows) => shows.filter((show) => show.category === 'Movie')
);

export const selectTvSeries = createSelector(
  (state) => state.persistedReducer.shows.list,
  (shows) => shows.filter((show) => show.category === 'TV Series')
);

export const selectBookmarkedMovies = createSelector(
  (state) => state.persistedReducer.shows.list,
  (shows) =>
    shows.filter(
      (show) => show.category === 'Movie' && show.isBookmarked === true
    )
);

export const selectBookmarkedTvSeries = createSelector(
  (state) => state.persistedReducer.shows.list,
  (shows) =>
    shows.filter(
      (show) => show.category === 'TV Series' && show.isBookmarked === true
    )
);

export const selectSearching = (state) => {
  return state.persistedReducer.shows.searching;
};

export const selectLoadingState = (state) => {
  return state.persistedReducer.shows.isLoading;
};
