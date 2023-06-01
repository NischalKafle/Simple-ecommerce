import './App.css';
import Product from './Product/Product';
import NavBar from './Product/NavBar';
import SearchBar from './Product/SearchBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
      <Product/>
    </div>
  );
}

export default App;
