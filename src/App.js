import Product from './Product/Product';
import NavBar from './Product/NavBar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Cart from './Product/Cart'
function App() {
  
  return (
    <div className="App" style={{textAlign:'center'}}>
    <NavBar/>
    <Routes>
    <Route path="/" element={
      <Product/>
    }>
    </Route>
    <Route path="/cart" element={
      <Cart/>
    }>
    </Route>
      </Routes>
    </div>
  );
}

export default App;

