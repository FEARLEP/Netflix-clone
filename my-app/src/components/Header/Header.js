import React from 'react';
import Navigation from './Navigation';
import NetflixLogo from './NetflixLogo';
import PropTypes from 'prop-types';

function Header({ backgroundImage }) {
  const defaultBg = 'https://image.tmdb.org/t/p/original/xYZ9QP5nFaNYwVUvJGSI1YwW0Qz.jpg';

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(${backgroundImage || defaultBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '80vh',
        position: 'relative',
        color: 'white'
      }}
    >
      <header className="netflix-header" role="banner">
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

