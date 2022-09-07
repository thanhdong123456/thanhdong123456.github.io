import './App.css';
import { Route, Routes } from "react-router-dom";
import ProductList from './ProductList';
import DescProduct from "./descProduct";
import Header from './header';
import Cart from './cart.js';
import {  CartProvider } from "react-use-cart"



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route exact path='/product/:slug' element={<DescProduct />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>   
      </CartProvider>
    </div>
  );
}

export default App;
