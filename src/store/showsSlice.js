import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  list: [],
  searching: false,
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
      const { isSearching, input } = action.payload;
      shows.searching = isSearching;
      shows.searchParams = input;
    },
    bookmark: (shows, action) => {},
  },
});

export const { showsReceived, search, bookmark } = showsSlice.actions;

export default showsSlice.reducer;

//selectors
export const selectShows = (state) => {
  return state.reducer.shows.list;
};

export const selectTrendingShows = createSelector(
  (state) => state.reducer.shows.list,
  (trending) => trending.filter((item) => item.isTrending === true)
);

export const selectMovies = createSelector(
  (state) => state.reducer.shows.list,
  (shows) => shows.filter((show) => show.category === 'Movie')
);

export const selectTvSeries = createSelector(
  (state) => state.reducer.shows.list,
  (shows) => shows.filter((show) => show.category === 'TV Series')
);

export const selectBookmarkedMovies = createSelector(
  (state) => state.reducer.shows.list,
  (shows) =>
    shows.filter(
      (show) => show.category === 'Movie' && show.isBookmarked === true
    )
);

export const selectBookmarkedTvSeries = createSelector(
  (state) => state.reducer.shows.list,
  (shows) =>
    shows.filter(
      (show) => show.category === 'TV Series' && show.isBookmarked === true
    )
);

export const selectSearching = (state) => {
  return state.reducer.shows.searching;
};

// export const selectFilteredShows = createSelector(
//   (state) => state.reducer.shows.list,
//   (shows) => shows
// );

// export const selectFilteredMovies = createSelector(
//   (state) =>
//     state.reducer.shows.list.filter((show) => show.category === 'Movie'),
//   (movies) => movies
// );

// export const selectFilteredTvSeries = createSelector(
//   (state) =>
//     state.reducer.shows.list.filter((show) => show.category === 'TV Series'),
//   (tvSeries) => tvSeries
// );
