import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import ProductList from './components/ProductList';
import DescProduct from "./components/descProduct";
import Header from './components/header';
import Cart from './components/cart';
import Register from './components/register';
import Login from './components/login'




function App() {

  const [cartItems, setCartItems] = useState([]);
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

  const [issucces, setIssucces] = useState('')
  const removeCart = () => {
    if(issucces === ''){
      alert('đặt hàng thất bại. Bạn phải đăng nhập trước khi đặt hàng')
    }else {
      setCartItems([]);
      alert('đặt hàng thành công')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIssucces('')
  }
  return (
    <div className="App">
        <Header handleLogout={handleLogout} countCartItems={cartItems.length} issucces={issucces} setIssucces={setIssucces}  />
        <Routes>
          <Route exact path="/" element={<ProductList onAdd={onAdd} />} />
          <Route path='/product/:slug' element={<DescProduct onAdd={onAdd} cartItems={cartItems} />} />
          <Route path='/cart' element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} removeCart={removeCart} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login setIssucces={setIssucces} />} />
        </Routes>
    </div>
  );
}


export default App;
