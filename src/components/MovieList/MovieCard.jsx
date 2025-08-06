import React from 'react'
import "./MovieCard.css"
import { FaStar } from 'react-icons/fa6';
import { FaStarHalf } from 'react-icons/fa';

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://i.scdn.co/image/ab67616d0000b273a7e251b543c77a6ed356dfbe"
        alt=""
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie name </h3>
        <div className="align_center movie_date_rate">
          <p>10-20-2020</p>
          <p>8.0<FaStarHalf className='emoji'/> </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          enim consequatur aliquam officia odio autem.
        </p>
      </div>
    </a>
  );
}

export default MovieCard
