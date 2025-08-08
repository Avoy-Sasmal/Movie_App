import React from "react";

const FIlterGroup = ({ minrating, onratingClick, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => (
        <li
          className={
            minrating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          key={rate}
          onClick={() => onratingClick(rate)}
        >
          {rate} Star
        </li>
      ))}

      {/* <li
        className={
          minrating === rate ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onratingClick({rate})}
      >
        {rate} star{" "}
      </li>
      <li
        className={
          minrating === rate ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => {
          handelFilter({rate});
        }}
      >
        {rate} star
      </li> */}
    </ul>
  );
};

export default FIlterGroup;
