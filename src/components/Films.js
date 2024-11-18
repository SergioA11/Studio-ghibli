import React, { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  return (
    <div className="films-container">
      <h1>Studio Ghibli Films</h1>
      <div className="film-grid">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default Films;
