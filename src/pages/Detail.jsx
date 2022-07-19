import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

export default function Detail() {
  let params = useParams();
  return (
    <>
      <Nav />
    </>
  );
}
