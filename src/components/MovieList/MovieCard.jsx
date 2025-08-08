import React from "react";
import "./MovieCard.css";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      className="movie_card"
    >
      <img
        src={
          movie.poster_path
            ? `${imageBaseUrl}${movie.poster_path}`
            : "/placeholder-poster.jpg"
        }
        alt={movie.title}
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.vote_average}
            <FaStarHalf className="emoji" />{" "}
          </p>
        </div>
        <p className="movie_description">
          {movie.overview
            ? movie.overview.slice(0, 100) + "..."
            : "No Description available right now"}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
