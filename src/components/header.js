import cart from "../img/cart.png"
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Header(props) {
    const {countCartItems, issucces, handleLogout } = props
    
    let styleLogin = {}
    let styleLogout = {}

    if(issucces !== '') {
        styleLogin = {display: "none"}
    }else {
        styleLogout = {display: "none"}
    }
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
                <Link to="/register" className="sign-up" style={styleLogin}>
                    <button>Đăng ký</button>
                </Link>
                <Link to="/login" className="sign-in" style={styleLogin}>
                    <button>Đăng nhập</button>
                </Link>
                <p className="sign-up" style={styleLogout}>xin chào</p>
                <Link onClick={handleLogout}  to="/login" className="sign-in" style={styleLogout}>
                    <button>Đăng xuất</button>
                </Link>
            </div>
      </header>
    )
}

export default Header

