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
            setIssucces(response.config.data);
            console.log(response);
            alert('đăng nhập thành công')
            // setIssucces('1')
            if(response.data.data.access_token) {
                localStorage.setItem("token", JSON.stringify(response.data.data))
            }
            setNavigate(true)
            // return response.data.data
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
                <input 
                    type="text" 
                    placeholder="email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                >
                </input>
                <br></br> <br></br>
                <label>Mật khẩu: </label>
                <br></br>
                <input 
                    type="password" 
                    placeholder="password" 
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                >
                </input>
                <br></br> <br></br>
                <button>Đăng nhập</button>
            </form>
        </div>
    )
}

export default Login;

// email: 'marklyan@gmail.com',
// password: 'simple_password'