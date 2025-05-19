import React from 'react';

function Navigation() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <ul>
        <li><a href="/browse">Home</a></li>
        <li><a href="/tv-shows">TV Shows</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/latest">New & Popular</a></li>
        <li><a href="/mylist">My List</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;