import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";



function Login({setIssucces}) {

    const [navigate, setNavigate] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandle = e => {
        e.preventDefault();

        axios.post('https://api.storerestapi.com/auth/login',{
            email: email, password: password
        })
        .then((response) => {
            console.log(response.config.data);
            alert('đăng nhập thành công')
            setIssucces('1')
            setNavigate(true)
        })
        .catch((err) => {
            console.log(err)
            alert('đăng nhập thất bại')
            setIssucces('')
            setNavigate(false)
        })
    }
    if(navigate) {
        return <Navigate to='/'></Navigate>
    }

    return (
        <div>
            <h1>Đăng nhập</h1>
            <form className="form" onSubmit={submitHandle}>
                <label>Email: </label>
                <br></br>
                <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
                <br></br> <br></br>
                <label>Mật khẩu: </label>
                <br></br>
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                <br></br> <br></br>
                <button>Đăng nhập</button>
            </form>
        </div>
    )
}

export default Login;