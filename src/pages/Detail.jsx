import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import requests from "../utils/request";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Grid, Typography } from "@mui/material";
import Row from "../components/Row";

export default function Detail() {
  let params = useParams();

  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

  const fetchData = () => {
    axios.get(requests.fetchSingleMovie(params.id)).then((res) => {
      setMovie(res.data);

      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(
          res.data?.title || res.data?.name || res.data?.original_name || ""
        )
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => alert(error.message));
      }
    });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <Grid style={{ color: "white" }} container spacing={2} mt={5} p={5}>
        <Grid md={12}>
          <Typography variant="h4">{movie?.title}</Typography>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </Grid>
        <Grid item md={12} display="flex" mb={10}>
          {/* banner vertical */}
          <img
            className={`row__poster row__posterLarge`}
            src={`${BASE_IMAGE_URL}${movie?.poster_path}`}
            alt="POSTER"
          />
          <Grid>
            <Typography variant="h4">{movie?.title}</Typography>
            <Typography variant="h4">
              ({parseInt(movie?.release_date)})
            </Typography>
            <Typography variant="p">
              Rating : {movie?.vote_average} / 10
            </Typography>
            <Typography>{movie?.overview}</Typography>
          </Grid>
          <Grid></Grid>
        </Grid>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      </Grid>
    </>
  );
}
