// Header.js
import React from 'react';
import Navigation from './Navigation';
import NetflixLogo from './NetflixLogo';
import PropTypes from 'prop-types';
function Header({ backgroundImage }) {
  return (
    <div className="hero-banner" style={{
      backgroundImage: `url(${backgroundImage || 'https://image.tmdb.org/t/p/original/xYZ9QP5nFaNYwVUvJGSI1YwW0Qz.jpg'})`
    }}>
      <header className="netflix-header">
        <NetflixLogo />
        <Navigation />
      </header>
    </div>
  );
}

Header.propTypes = {
  backgroundImage: PropTypes.string
};

export default Header;