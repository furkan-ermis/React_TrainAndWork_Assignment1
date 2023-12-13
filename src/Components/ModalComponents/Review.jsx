import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import FavoriteButton from "../FavoriteButton.jsx";
import WatchMovie from "./WatchMovie.jsx";
import Rate from "./rate.jsx";
// Review block inside MovieModal
function Review(props) {
  const [rating, setRating] = useState(0);

  const updateRate = (movie) => {
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    }).then((response) => response.json());
  };
  const handleRate = (rate) => {
    props.movie.rateCount = props.movie.rateCount + 1;
    props.movie.rating =
      (rate + props.movie.rating * (props.movie.rateCount - 1)) /
      props.movie.rateCount;
    setRating(props.movie.rating);
    updateRate(props.movie);
  };

  return (
    <>
      <p>
        <FaStar size="18" color="rgb(245, 197, 24)" />
        &nbsp;
        {parseFloat(props.movie.rating).toFixed(1)}
      </p>
      &nbsp; &nbsp;
      <Rate rating={props.movie.rating} onRating={(rate) => handleRate(rate)} />
      &nbsp; &nbsp;
      <p>{props.movie.rateCount} reviews</p>
      &nbsp; &nbsp;
      <WatchMovie
        isMovie={props.isMovie}
        getMovie={props.getMovie}
        movie={props.movie}
      />
      &nbsp; &nbsp;
      <FavoriteButton
        movie={props.movie}
        changeFavorite={props.changeFavorite}
      />
    </>
  );
}

export default Review;
