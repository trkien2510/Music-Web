import React, { useState } from 'react';
import '../Styles/SignupStyle.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Vui lòng nhập một địa chỉ email hợp lệ');
            return;
        }

        navigate('/signup-details', { state: { email } });
    };

    return (
        <div className="signup_page">
            <div className='signup_form'>
                <img className='top_img' src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='' width="50px" height="50px"></img>
                <div className='signup_title'>
                    <strong>đăng ký để<br></br>bắt đầu nghe</strong>
                </div>

                <br></br>

                <div className='email_title'>
                    <strong>Địa chỉ Email</strong>
                </div>

                <input
                    type='text'
                    placeholder='name@domain.com'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError(null);
                    }}
                />

                {error && <div className="error">{error}</div>}

                <Link>
                    <div className='SignupWithPhoneNumber'>
                        <strong><u>Đăng ký bằng số điện thoại</u></strong>
                    </div>
                </Link>

                <button className='next' type='button' onClick={handleSignup}>
                    <strong>Tiếp theo</strong>
                </button>

                <hr className='hr'></hr>

                <button className='SignupWithGoogle' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/281/281764.png' alt='Google Logo' />
                    <strong>Đăng ký bằng Google</strong>
                </button>

                <button className='SignupWithFacebook' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png' alt='Facebook Logo' />
                    <strong>Đăng ký bằng Facebook</strong>
                </button>

                <button className='SignupWithApple' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/0/747.png' alt='Apple Logo' />
                    <strong>Đăng ký bằng Apple</strong>
                </button>


                <hr className='hr'></hr>

                <div className='signuptologin'>
                    <span>
                        Bạn đã có tài khoản?
                        <Link to="/login">
                            <span><u>đăng nhập tại đây</u></span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Signup;
