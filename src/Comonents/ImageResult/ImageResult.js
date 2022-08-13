import React from "react";
import { useLocation } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState, useEffect } from "react";
import styles from "./ImageResult.module.css";
import axios from "axios";
import ModalImage from "react-modal-image";

const apiUrl = "https://pixabay.com/api/";
const apiKey = "29041120-b5e15227a3819ddba0ebb7159";

function ImageResult() {
  const [pics, setPics] = useState([]);
  const location = useLocation();

  const squery = location.state.squery;

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/?key=${apiKey}&q=${location.state.squery}&image_type=photos&safesearch=true`
      )
      .then((response) => {
        console.log(response.data.hits[0].webformatURL);
        setPics(response.data.hits);
      });
  }, []);
  return (
    <div>
      <div>
        <ImageList
          variant="masonry"
          cols={4}
          gap={6}
          className={styles.gridlist}
        >
          {pics.map((item) => (
            <ImageListItem key={item.id}>
              <ModalImage
                small={item.webformatURL}
                large={item.webformatURL}
                alt="Image Loading"
              />
              {/* <img src={`${item.previewURL}`} alt={item.user} loading="lazy" /> */}
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default ImageResult;
