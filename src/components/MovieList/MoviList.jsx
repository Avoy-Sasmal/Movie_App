import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./Movielist.css";
import { FaFireFlameCurved } from "react-icons/fa6";
import MovieCard from "./MovieCard";
import FIlterGroup from "./FIlterGroup";

const MoviList = ({type,title}) => {
  const [movies, setMovies] = useState([]);
  const [minrating, setMiniRating] = useState(0);
  const [filtermovies, setFilterMovies] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filtermovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=ba95fe50ab4602e2eb2d6d965018e1de`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMovies(data.results);
      setFilterMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handelFilter = (rate) => {
    if (rate === minrating) {
      setMiniRating(0);
      setFilterMovies(movies);
    } else {
      setMiniRating(rate);
      const filtermovies = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtermovies);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <section className="movie-list">
        <header className="align_center movie_list_header">
          <h2 className="movie_list_heading">
            Popular <FaFireFlameCurved className="nav_emoji" />
          </h2>
        </header>
        <div className="align_center">
          <p>Loading movies...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="movie-list">
        <header className="align_center movie_list_header">
          <h2 className="movie_list_heading">
            Popular <FaFireFlameCurved className="nav_emoji" />
          </h2>
        </header>
        <div className="align_center">
          <p style={{ color: "red" }}>{error}</p>
          <button
            onClick={fetchMovies}
            style={{ marginTop: "10px", padding: "8px 16px" }}
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="movie-list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="movie_list_heading">
          {title} <FaFireFlameCurved className="nav_emoji" />
        </h2>

        <div
          className="align_center
        movie_list_fs"
        >
          <FIlterGroup
            minrating={minrating}
            onratingClick={handelFilter}
            ratings={[7, 5, 4]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
            <option value="popularity">Popularity</option>
          </select>

          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filtermovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviList;
