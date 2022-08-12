import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import ImageResult from "../ImageResult/ImageResult";
import styles from "./Searchpage.css";
import axios from "axios";
import Empty from "./Empty";

const apiUrl = "https://pixabay.com/api/";
const apiKey = "29041120-b5e15227a3819ddba0ebb7159";

export default function Searchpage() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  useEffect(() => {}, []);

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  const history = useNavigate();

  const goto = (path) => {
    Navigate(path);
  };
  const getAllPics = (e) => {
    e.preventDefault();

    axios
      .get(
        `${apiUrl}/?key=${apiKey}&q=${query}&image_type=photos&safesearch=true`
      )
      .then((response) => {
        setPics(response.data.hits);
        console.log(response.data.hits);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className="rooot">
        <form className="searchBox" onSubmit={getAllPics}>
          <label className="label" htmlFor="squery"></label>
          <input
            type="text"
            name="query"
            className="input"
            placeholder={`Search image`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="button"
            onClick={() =>
              query &&
              history(`/results/${query}`, { state: { squery: query } })
            }
          >
            Search
          </button>
        </form>

        <br />

        <div className="picgrid">
          {pics.map((pic) => (
            <div className="card">
              <img
                className="card--image"
                alt={pic.user}
                src={pic.imageURL}
                width="50%"
                height="50%"
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
