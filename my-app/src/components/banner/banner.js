import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";
function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get(requests.fetchNetflixOriginals);
      console.log("API Response:", response.data.results); // Log the results
      setMovie(response.data.results[0]); // Force the first movie for testing
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

const backgroundImage = movie?.backdrop_path
  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
  : 'https://via.placeholder.com/1920x1080'; // Fallback image

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name || "Untitled"}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;










