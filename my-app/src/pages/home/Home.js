import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/banner/banner';
import Row from '../../components/Row/Row';
import axios from '../../utils/axios';
import requests from '../../utils/requests';

const Home = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    async function fetchFeatured() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const movies = response.data.results;
      setFeaturedMovie(movies[Math.floor(Math.random() * movies.length)]);
    }

    fetchFeatured();
  }, []);

  return (
    <div className="home-page">
      <Header backgroundImage={`https://image.tmdb.org/t/p/original${featuredMovie?.backdrop_path}`} />
      
      <main className="home-content">
        <div className="content-placeholder">
          <h2>Featured Content</h2>
          <p>{featuredMovie?.overview || 'This is where your featured content will appear'}</p>
        </div>

        {/* Movie Rows */}
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Popular TV Shows" fetchUrl={requests.fetchTvShow} />
      </main>

      <Banner movie={featuredMovie} />
      <Footer />
    </div>
  );
};

export default Home;
