import React, { useState } from "react";
import "../Styles/SignupStyle.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const nickname = document.getElementById("signup-nickname").value;
    const password = document.getElementById("signup-password").value;
    const repassword = document.getElementById("signup-re-password").value;

    if (
      username === "" ||
      nickname === "" ||
      password === "" ||
      repassword === ""
    ) {
      setError("Hãy nhập đầy đủ thông tin!");
      return;
    }
    if (password !== repassword) {
      setError("Mật khẩu không trùng nhau!");
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: username,
      password: password,
      nickname: nickname,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="signup_page">
      <div className="signup_form">
        <img
          className="top_img"
          src="https://cdn-icons-png.flaticon.com/512/9280/9280598.png"
          alt=""
          width="50px"
          height="50px"
        ></img>
        <div className="signup_title">
          <strong>Đăng ký</strong>
        </div>

        <br></br>
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="email_title">
            <strong>Username</strong>
          </div>

          <input
            id="signup-username"
            type="text"
            placeholder="username"
            onChange={(e) => {
              setError(null);
            }}
          />

          <div className="email_title">
            <strong>Nickname</strong>
          </div>
          <input
            id="signup-nickname"
            type="text"
            placeholder="nickname"
            onChange={(e) => {
              setError(null);
            }}
          />
          <div className="email_title">
            <strong>Password</strong>
          </div>
          <input
            id="signup-password"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setError(null);
            }}
          />
          <div className="email_title">
            <strong>Re-password</strong>
          </div>
          <input
            id="signup-re-password"
            type="password"
            placeholder="re-password"
            onChange={(e) => {
              setError(null);
            }}
          />

          {error && <div className="error">{error}</div>}

          <button className="next" type="submit">
            <strong>Đăng ký</strong>
          </button>
        </form>
        <hr className="hr"></hr>

        <div className="signuptologin">
          <span>
            Bạn đã có tài khoản?
            <Link to="/login">
              <span>
                <u>đăng nhập tại đây</u>
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
