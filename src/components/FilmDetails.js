import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailSection from "./DetailSection";

const FilmDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.vercel.app/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, [id]);

  if (!film) return <p>Loading...</p>;

  return (
    <div className="film-details">
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <DetailSection title="Characters" urls={film.people} />
      <DetailSection title="Species" urls={film.species} />
      <DetailSection title="Locations" urls={film.locations} />
      <DetailSection title="Vehicles" urls={film.vehicles} />
    </div>
  );
};

export default FilmDetails;
