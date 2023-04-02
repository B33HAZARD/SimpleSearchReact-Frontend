import './App.css';
import SearchBar from './Components/SearchBar';
import bookData from './Data.json';

function App() {
  return (
    <div className="App">
      <SearchBar placehodler="Search" data={bookData} />
    </div>
  );
}

export default App;
