import React, { useState } from 'react';
import '../Styles/LoginStyle.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError(null);

        const loginData = {
            usernameOrEmail,
            password
        };

        if (!usernameOrEmail || !password) {
            setError('Vui lòng nhập email hoặc tên người dùng và mật khẩu.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (!response.ok) {
                throw new Error('Email hoặc mật khẩu không đúng!');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);

            navigate('/');
        } catch (error) {
            setError(error.message = 'Email hoặc mật khẩu không đúng!');
        }
    };

    return (
        <div className='login_page'>
            <div className='login_form'>
                <img className='top_img' src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='' width="50px" height="50px" />
                <div className='logintitle'>
                    <strong>Đăng nhập</strong>
                </div>

                {/* Các nút đăng nhập bằng dịch vụ bên ngoài */}
                <button className='LoginWithGoogle' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/281/281764.png' alt='Google Logo' />
                    <strong>Tiếp tục bằng Google</strong>
                </button>

                <button className='LoginWithFacebook' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png' alt='Facebook Logo' />
                    <strong>Tiếp tục bằng Facebook</strong>
                </button>

                <button className='LoginWithApple' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/0/747.png' alt='Apple Logo' />
                    <strong>Tiếp tục bằng Apple</strong>
                </button>

                <button className='LoginWithPhoneNumber' type='button'>
                    <strong>Tiếp tục bằng số điện thoại</strong>
                </button>

                <hr className='hr' />

                <div className='emailorusername'>
                    <strong>Email hoặc tên người dùng</strong>
                </div>
                <input 
                    type='text' 
                    placeholder='Email hoặc tên người dùng' 
                    value={usernameOrEmail} 
                    onChange={(e) => setUsernameOrEmail(e.target.value)} 
                />
                <div className='password'>
                    <strong>Mật khẩu</strong>
                </div>
                <input
                    type='password'
                    placeholder='Mật khẩu'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <div className="error">{error}</div>} {/* Hiển thị thông báo lỗi */}

                <button className='login' type='button' onClick={handleLogin}>
                    <strong>Đăng nhập</strong>
                </button>

                <Link>
                    <div className='forgotpassword'>
                        <u>Quên mật khẩu?</u>
                    </div>
                </Link>

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
