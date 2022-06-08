import React from 'react';
import searchIcon from '../../assets/icon-search.svg';
import './searchInput.scss';

const SearchInput = ({ placeholder }) => {
  return (
    <div className="search">
      <img className="icon" src={searchIcon} alt="icon" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchInput;
