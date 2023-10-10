import React, { useState, useEffect } from "react";
import { fetchNowPlay } from "../../../services/api";
import { useMemo } from "react";

function NowPlay() {
  const image_path = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  useMemo(() => {
    /*  Função para fazer a requisição à API do TMDB usando Axios */
    const fetchMovies = async () => {
      /* Tratamento de erro */
      try {
        /* Chamando função de API.jsx */
        const data = await fetchNowPlay();
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao carregar Filmes:", error);
      }
    };
    /* Chamando a função */
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className="">Filmes Lançamentos</h1>
      <div id="cardNow">
        {movies.map((movie) => {
          return (
            <div className="card mb-3" key={movie.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`${image_path}${movie.poster_path}`}
                    className="img-fluid rounded-start"
                    alt=""
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">
                      Lançamento: {movie.release_date}
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Nota do filme: {movie.vote_average}
                      </small>
                    </p>
                    <p className="card-text" >
                      <small className="text-body-secondary">
                         {movie.overview.length > 150 ? `${movie.overview.slice(0, 150)}...` : movie.overview}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NowPlay;
