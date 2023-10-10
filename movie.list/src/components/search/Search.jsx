import { useEffect, useState } from "react";
import { fetchSearchMovies } from "../../services/api";

function Search() {
  const [busca, setBusca] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState([]);
  

  useEffect(() => {
    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const data = await fetchSearchMovies(busca); 
        setResults(data);
      } catch (error) {
        console.log("Erro ao encontrar seu filme", error);
      }
    };  
  }, []);

  useEffect(() => {
    setFilter(results.filter(movie => movie.name.includes(busca)))
  },[busca])

  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setBusca(e.target.value)}
          value={busca}
        />
        <button className="btn btn-outline-light" type="submit">
          Search
        </button>
      </form>

    </>
  );
}
export default Search;
