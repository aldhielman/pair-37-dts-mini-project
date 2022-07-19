import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useNavigate } from "react-router-dom";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    navigate(`/detail/${movie.id}`);
    // if (trailerUrl) {
    //   setTrailerUrl("");
    // } else {
    //   movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
    //     .then((url) => {
    //       const urlParams = new URLSearchParams(new URL(url).search);
    //       setTrailerUrl(urlParams.get("v"));
    //     })
    //     .catch((error) => alert(error.message));
    // }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            title={movie?.title || movie?.name || movie?.original_name}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${BASE_IMAGE_URL}${
              isLargeRow
                ? movie.poster_path
                : movie.backdrop_path
                ? movie.backdrop_path
                : movie.poster_path
            }`}
            alt={movie?.title || movie?.name || movie?.original_name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
