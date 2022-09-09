import './App.css';
import { Route, Routes } from "react-router-dom";
import ProductList from './components/ProductList';
import DescProduct from "./components/descProduct";
import Header from './components/header';
import Cart from './components/cart';
import { useState } from 'react';




function App() {
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find(x => x._id === product._id)
    if(exist) {
      setCartItems(cartItems.map(x => x._id === product._id ? {...exist, qty: exist.qty + 1} : x))
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find(x => x._id === product._id)
    if(exist.qty === 1) {
      setCartItems(cartItems.filter(x => x._id !== product._id))
    } else {
      setCartItems(
        cartItems.map(x => x._id === product._id ? {...exist, qty: exist.qty - 1} : x)
      )
    }
  }
  return (
    <div className="App">

        <Header countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={<ProductList onAdd={onAdd} />} />
          <Route exact path='/product/:slug' element={<DescProduct onAdd={onAdd} cartItems={cartItems} />} />
          <Route exact path='/cart' element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
        </Routes>
    </div>
  );
}

export default App;
