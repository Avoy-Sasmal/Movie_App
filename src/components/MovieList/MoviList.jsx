import React, { useEffect } from 'react'
import './Movielist.css'
import { FaFireFlameCurved } from 'react-icons/fa6';
import MovieCard from './MovieCard';

const MoviList = () => {
  // useEffect(
  //   () => {
  //    fetch(" ").then((res)=>res.json()).then((data)=>console.log(data) 
  //    )
  //   },
  //   []
  // );


  useEffect(()=>{
      fetchMovies();
  },[])

  // const fetchMovies  = async () =>{
  //   const response = await fetch("");
  //   const data = await response.json()
  //   console.log(data);
    
  // }

  const url = 'https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fc08a3c75bmsh5700e71266c6602p191e03jsnc56a8ad44bc8',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

const fetchMovies = async ()=>{
  const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
}

  return (
    <section className="movie-list">
      <header className="align_center movie_list_header">
        <h2 className="movie_list_heading">
          Popular <FaFireFlameCurved className="nav_emoji" />
        </h2>

        <div
          className="align_center
        movie_list_fs"
        >
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ star </li>
            <li className="movie_filter_item">6+ star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>

          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        <MovieCard/>
      </div>
    </section>
  );
}

export default MoviList
