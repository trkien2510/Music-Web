import React from 'react';
import '../Styles/LoginStyle.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login_page'>
            <div className='login_form'>
                <img className='top_img' src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='' width="50px" height="50px"></img>
                <div className='logintitle'>
                    <strong>Đăng nhập</strong>
                </div>

                <button className='LoginWithGoogle' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='Google Logo' />
                    <strong>Tiếp tục bằng Google</strong>
                </button>

                <button className='LoginWithFacebook' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='Facebook Logo' />
                    <strong>Tiếp tục bằng Facebook</strong>
                </button>

                <button className='LoginWithApple' type='button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='Apple Logo' />
                    <strong>Tiếp tục bằng Apple</strong>
                </button>

                <button className='LoginWithPhoneNumber' type='button'>
                    <strong>Tiếp tục bằng số điện thoại</strong>
                </button>

                <hr className='hr'></hr>

                <div className='emailorusername'>
                    <strong>Email hoặc tên người dùng</strong>
                </div>
                <input type='text' placeholder='Email hoặc tên người dùng'></input>
                <div className='password'>
                    <strong>Mật khẩu</strong>
                </div>
                <input type='text' placeholder='Mật khẩu'></input>

                <button className='login' type='button'>
                    <strong>Đăng nhập</strong>
                </button>

                <div className='forgotpassword'>
                    <u>Quên mật khẩu?</u>
                </div>

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
