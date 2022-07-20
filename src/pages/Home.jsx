import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Row from "../components/Row";
import { auth } from "../config/firebase";
import requests from "../utils/request";

export default function Home() {
  // const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  // const handleOnclick = async () => {
  //   try{
  //     await signOut(auth)
  //     navigate('/login')
  //   }catch(error){
  //     console.log(error.message)
  //   }
  // }
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Footer />
    </>
  );
}
