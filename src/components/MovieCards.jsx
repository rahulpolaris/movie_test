import React, { useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MovieCards({ movies, setCurrentMovie }) {
  // useEffect(()=>{
  //     console.log(props)
  // })
  const layDownCards = movies.map((mov) => (
    <MovieCard
      key={mov.show.id}
      id={mov.show.id}
      name={mov.show.name}
      lang={mov.show.language}
      genre={mov.show.genres}
      image={mov.show.image}
      status={mov.show.status}
      movieURL={mov.show.url}
      summary={mov.show.summary}
      setCurrentMovie = {setCurrentMovie}

    />
  ));

  return <div className="movie-cards">{layDownCards}</div>;
}
