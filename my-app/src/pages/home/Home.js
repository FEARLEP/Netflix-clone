import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  // Temporary data until you implement API fetching
  const featuredContent = {
    backdrop_path: 'https://image.tmdb.org/t/p/original/xYZ9QP5nFaNYwVUvJGSI1YwW0Qz.jpg'
  };

  return (
    <div className="home-page">
      <Header backgroundImage={featuredContent.backdrop_path} />
      
      <main className="home-content">
        {/* Content will go here */}
        <div className="content-placeholder">
          <h2>Featured Content</h2>
          <p>This is where your featured content will appear</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;