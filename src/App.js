import './App.css';
import ProductList from './ProductList';
import { Route, Routes } from "react-router-dom";
import DescProduct from "./descProduct";
import Header from './header';
import Cart from './cart.js'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<ProductList />} />
          <Route exact path='/product/:slug' element={<DescProduct />} />
          <Route exact path='/cart' element={<Cart />} />
      </Routes>      
    </div>
  );
}

export default App;
