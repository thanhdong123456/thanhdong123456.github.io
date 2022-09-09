import cart from "../img/cart.png"
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Header(props) {
    const {countCartItems} = props
    return (
        <header className="App-header">
            <Link to='/' className="App-logo"><img src={logo}  alt="logo" /></Link>
            <div className='nav'>
                <Link to='/cart' className='cart'>
                    <img src={cart} />
                    {countCartItems? (
                        <button className="badge">{countCartItems}</button>
                    ) : ('')}
                </Link>
                <button className="sign-up">Đăng ký</button>
                <button className="sign-in">Đăng nhập</button>
            </div>
      </header>
    )
}

export default Header