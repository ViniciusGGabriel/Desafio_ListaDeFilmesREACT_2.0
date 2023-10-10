/* Componentes importados */
import NowPlay from "./components/body.content/now.play/NowPlay";
import PopularMovies from "./components/body.content/popular.movies/PopularMovies";
import TopRated from "./components/body.content/top.rated/TopRated";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <PopularMovies />
      <NowPlay />
      <TopRated />
    </>
  );
}

export default App;
