import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ film }) => (
  <div className="film-card">
    <h2>{film.title}</h2>
    <p>{film.description.substring(0, 150)}...</p>
    <p>
      <strong>Director:</strong> {film.director}
    </p>
    <p>
      <strong>Release Date:</strong> {film.release_date}
    </p>
    <Link to={`/film/${film.id}`} className="details-link">
      View Details
    </Link>
  </div>
);

export default FilmCard;
