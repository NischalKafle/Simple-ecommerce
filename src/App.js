import Product from './Product/Product';
import NavBar from './Product/NavBar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Cart from './Product/Cart'
import PaymentProcessing from './Product/PaymentProcessing';
import Thankyou from './Product/Thankyou';

function App() {  
  return (
    <Routes>
    <Route path="/" element={
      <div className="App" style={{textAlign:'center'}}>
      <NavBar/>
      <Product/>
</div>
    }>
    </Route>
    <Route path="/cart" element={
      <div className="App" style={{textAlign:'center'}}>
      <NavBar/>
      <Cart/>
</div>
    }>
    </Route>
    <Route path="/paymentprocessing" element={
      <div className="App" style={{textAlign:'center'}}>
      <NavBar/>
      <PaymentProcessing/> 
</div>
    }>
    </Route> 
    <Route path="/thankyou" element={
      <Thankyou/>
    }>
    </Route> 
      </Routes>
    
  );
}

export default App;

