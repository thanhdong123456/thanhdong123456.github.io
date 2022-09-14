

function Register() {
    return (
        <div>
            <h1>Đăng ký</h1>
            <form className="form">
                <label>Email: </label>
                <br></br>
                <input type="text" placeholder="email" id="email"></input>
                <br></br> <br></br>
                <label>Mật khẩu: </label>
                <br></br>
                <input type="password" placeholder="password" id="password"></input>
                <br></br> <br></br>
                <button>Đăng ký</button>
            </form>
        </div>
    )
}

export default Register;