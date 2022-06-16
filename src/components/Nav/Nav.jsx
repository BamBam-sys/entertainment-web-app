import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as HomeIcon } from '../../assets/icon-nav-home.svg';
import { ReactComponent as BookMarks } from '../../assets/icon-nav-bookmark.svg';
import { ReactComponent as Movies } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as TvSeries } from '../../assets/icon-nav-tv-series.svg';
import avatar from '../../assets/image-avatar.png';
import { NavLink, useNavigate } from 'react-router-dom';
import './nav.scss';
import { useDispatch } from 'react-redux';
import { userAuthenticated } from '../../store/userSlice';

const Nav = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(userAuthenticated({}));
    navigate('/login');
  };

  const navStyle = (isActive) => {
    return {
      style: isActive ? 'active' : '',
    };
  };

  return (
    <div className="nav">
      <Logo className="logo" />
      <nav>
        <NavLink className={navStyle.style} to="/">
          <HomeIcon className="navIcon" />
        </NavLink>
        <NavLink className={navStyle.style} to="/movies">
          <Movies className="navIcon" />
        </NavLink>
        <NavLink className={navStyle.style} to="/tvseries">
          <TvSeries className="navIcon" />
        </NavLink>
        <NavLink className={navStyle.style} to="/bookmarks">
          <BookMarks className="navIcon" />
        </NavLink>
      </nav>
      <div>
        <img className="avatar" src={avatar} alt="avatar" />
        <span className="logout" onClick={handleLogOut}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default Nav;
