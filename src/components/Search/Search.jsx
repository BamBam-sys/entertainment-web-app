import React from 'react';
import CardList from '../CardList/CardList';

const Search = ({ data: shows, input }) => {
  const filteredShows = shows.filter((show) =>
    show.title.toLowerCase().replace(/ /g, '').includes(input?.toLowerCase())
  );

  const text =
    filteredShows.length === 0
      ? `Found no results for '${input}'`
      : `Found ${filteredShows.length} result${
          filteredShows.length > 1 ? 's' : ''
        } for '${input}' `;

  return (
    <div>
      <CardList data={filteredShows} headingText={text} />
    </div>
  );
};

export default Search;
