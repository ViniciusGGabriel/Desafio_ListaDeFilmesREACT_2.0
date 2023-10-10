import axios from "axios";
const API_KEY = "7f4cdcf564250599b852eca228dd9044";
const BASE_URL = "https://api.themoviedb.org/3";

// Função para buscar filmes populares
export const fetchPopularMovies = async () => {
  /* Tratamento de erro */
  try {
    /* Faz a requisição com axios */
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    /* Retorna os dados achados */
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    throw error;
  }
};

export const fetchTopRated = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes top rated:", error);
    throw error;
  }
};

export const fetchNowPlay = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes top rated:", error);
    throw error;
  }
};

export const fetchSearchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query, // Adicione o parâmetro de consulta para a pesquisa
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    throw error;
  }
};
