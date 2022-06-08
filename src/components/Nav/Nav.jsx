import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as HomeIcon } from '../../assets/icon-nav-home.svg';
import { ReactComponent as BookMarks } from '../../assets/icon-nav-bookmark.svg';
import { ReactComponent as Movies } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as TvSeries } from '../../assets/icon-nav-tv-series.svg';
import avatar from '../../assets/image-avatar.png';
import { NavLink } from 'react-router-dom';
import './nav.scss';
const Nav = () => {
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
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
  );
};

export default Nav;
