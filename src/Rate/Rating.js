import React, { useState } from "react";
import Rate from "./rate.js";
const Rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <div className="row">
        <div className="col text-center">
          <h2>Rate me</h2>
          <p>Rating Component</p>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p>Rating - {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
