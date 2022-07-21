import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../utils/request";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Footer />
    </>
  );
}
