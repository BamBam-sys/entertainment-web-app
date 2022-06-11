import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../store/showsSlice';
import searchIcon from '../../assets/icon-search.svg';
import './searchInput.scss';
import { selectSearching } from './../../store/showsSlice';
import Search from '../Search/Search';

const SearchInput = ({ placeholder, data: shows }) => {
  const dispatch = useDispatch();

  const searching = useSelector((state) => selectSearching(state));

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === '') {
      dispatch(search(false));
    } else {
      !searching && dispatch(search(true));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <>
      <div className="search">
        <img className="icon" src={searchIcon} alt="icon" />
        <input type="text" placeholder={placeholder} onChange={handleChange} />
      </div>

      {searching && <Search data={shows} input={input} />}
    </>
  );
};

export default SearchInput;
