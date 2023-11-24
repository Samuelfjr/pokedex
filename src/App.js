import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { searchPokemon } from "./api";



function App() {
  const onSearchHandler = (pokemon) => {
    console.log("search: ", pokemon);
  };
  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
      <div className="App"></div>
    </div>
  );
}

export default App;
