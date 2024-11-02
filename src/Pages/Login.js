import React, { useState } from 'react';
import '../Styles/LoginStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import login from '../Service/LoginService';

const Login = () => {

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        if (username == "" || password == "") {
            setError('Vui lòng nhập tên người dùng và mật khẩu.');
            return;
        }
        const data = await login(username, password)
        console.log(data)
        if(data.code == 200){
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('username', username);
            navigate('/');
        }else{
            setError(error.message = 'Username hoặc mật khẩu không đúng!');
        }
    };

    return (
        <div className='login_page'>
            <div className='login_form'>
                <img className='top_img' src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='' width="50px" height="50px" />
                <div className='logintitle'>
                    <strong>Đăng nhập</strong>
                </div>

                <form onSubmit={handleLogin}>
                    <div className='emailorusername'>
                        <strong>Username</strong>
                    </div>
                    <input 
                        id='login-username'
                        type='text' 
                        placeholder='Username'/>

                    <div className='password'>
                        <strong>Mật khẩu</strong>
                    </div>
                    <input
                        id='login-password'
                        type='password'
                        placeholder='Mật khẩu'/>

                    {error && <div className="error" style={{color: 'red'}}>{error}</div>} {/* Hiển thị thông báo lỗi */}

                    <button className='login' type='submit'>
                        <strong>Đăng nhập</strong>
                    </button>
                </form>

                <div className='logintosignup'>
                    Bạn chưa có tài khoản?
                    <Link to='/signup'>
                        <u>Đăng ký</u>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
