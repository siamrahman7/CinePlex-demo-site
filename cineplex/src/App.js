import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./searchIcon.svg";
import MovieCard from "./component/MovieCard";

const API_USE = "http://www.omdbapi.com?apikey=76b1b99e";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_USE}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  const [movies, setMovies] = useState("");
  const [searchTurm, setSearchTurm] = useState("");

  return (
    <div className="app">
      <h1
        className="cineplex"
        onClick={(refresh) => {
          window.location.reload();
        }}
      >
        CinePlex
      </h1>

      <div className="search">
        <input
          placeholder="Search here"
          value={searchTurm}
          onChange={(e) => setSearchTurm(e.target.value)}
        />

        <img
          src={searchIcon}
          alt="searchIcon"
          onClick={() => searchMovies(searchTurm)}
        />
      </div>
      {movies.length > "0" ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">No movies Found</div>
      )}
    </div>
  );
};

export default App;
