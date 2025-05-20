import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/browse" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tv-shows" className={({ isActive }) => (isActive ? 'active' : '')}>
            TV Shows
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')}>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/latest" className={({ isActive }) => (isActive ? 'active' : '')}>
            New & Popular
          </NavLink>
        </li>
        <li>
          <NavLink to="/mylist" className={({ isActive }) => (isActive ? 'active' : '')}>
            My List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
