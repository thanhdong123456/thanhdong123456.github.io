import cart from "./img/cart.png"
import logo from './logo.svg';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="App-header">
            <Link to='/' className="App-logo"><img src={logo}  alt="logo" /></Link>
            <div className='nav'>
                <Link to='/cart' className='cart'><img src={cart} /></Link>
                <button className="sign-up">Sign Up</button>
                <button className="sign-in">Sign In</button>
            </div>
      </header>
    )
}

export default Header