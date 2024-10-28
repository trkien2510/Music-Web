import React, { useState } from 'react';
import '../Styles/SignupDetailStyle.css';
import { useLocation, useNavigate } from 'react-router-dom';

const SignupDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { email } = location.state || { email: '' };
    const [password, setPassword] = useState('');
    const [passwordValidations, setPasswordValidations] = useState({
        hasLetter: false,
        hasSpecialCharacter: false,
        isLongEnough: false,
    });

    const [birthDate, setBirthDate] = useState({
        day: '',
        month: '',
        year: '',
    });

    const validatePassword = (pwd) => {
        setPassword(pwd);

        const validations = {
            hasLetter: /[a-zA-Z]/.test(pwd),
            hasSpecialCharacter: /[!@#$%^&*(),.?":{}|<>0123456789]/.test(pwd),
            isLongEnough: pwd.length >= 10,
        };

        setPasswordValidations(validations);
    };

    const handleSignup = () => {
        if (!password) {
            return;
        }
        navigate('/');
    };

    const handleBirthDateChange = (e) => {
        const { name, value } = e.target;
        setBirthDate((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="signup_detail_page">
            <div className='signup_detail_form'>
                <h1>Thông tin đăng ký</h1>
                <div>
                    <strong>Email</strong>
                </div>
                <input type='text' value={email}></input>

                <div>
                    <strong>Mật khẩu</strong>
                </div>

                <input
                    type='password'
                    placeholder='Mật khẩu'
                    value={password}
                    onChange={(e) => validatePassword(e.target.value)}
                />

                <div>
                    Mật khẩu của bạn phải có ít nhất:
                </div>
                <ul>
                    <li style={{ color: passwordValidations.hasLetter ? 'blue' : 'red' }}>
                        1 chữ cái
                    </li>
                    <li style={{ color: passwordValidations.hasSpecialCharacter ? 'blue' : 'red' }}>
                        1 chữ số hoặc ký tự đặc biệt (ví dụ: # ? ! &)
                    </li>
                    <li style={{ color: passwordValidations.isLongEnough ? 'blue' : 'red' }}>
                        10 ký tự
                    </li>
                </ul>

                <div>Tên người dùng</div>
                <input type='text'></input>
                <div>Ngày sinh</div>
                <div className='birthdate_inputs'>
                    <input
                        type='number'
                        name='day'
                        placeholder='Ngày'
                        value={birthDate.day}
                        onChange={handleBirthDateChange}
                        min='1'
                        max='31'
                    />
                    <select
                        name='month'
                        value={birthDate.month}
                        onChange={handleBirthDateChange}
                    >
                        <option value=''>Tháng</option>
                        {[...Array(12)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </select>
                    <input
                        type='number'
                        name='year'
                        placeholder='Năm'
                        value={birthDate.year}
                        onChange={handleBirthDateChange}
                        min='1900'
                        max={new Date().getFullYear()}
                    />
                </div>

                <button className='signup' type='button' onClick={handleSignup}>
                    <strong>Đăng ký</strong>
                </button>
            </div>
        </div>
    );
};

export default SignupDetail;