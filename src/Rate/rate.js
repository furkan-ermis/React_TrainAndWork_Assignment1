import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import { CiStar } from "react-icons/ci";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };
  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <CiStar
          onClick={() => onRating(idx)}
          key={idx}
          className="cursor-pointer"
          icon="star"
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, onRating, hoverRating]);

  return <div>{starRating}</div>;
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: { filled: "#f33b3b", unfilled: "#DCDCDC" },
};

export default Rate;
