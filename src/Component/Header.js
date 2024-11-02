import React, { useState, useEffect } from 'react';
import '../Styles/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo/logo.png'
import search from '../assets/icon/search-icon.png';
export default function Header(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatar, setAvatar] = useState(logo)
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if(token != null){
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch(`http://localhost:8080/api/users/avatar?username=${username}`, requestOptions)
        .then((response) => response.blob())
        .then((result) => {
          setAvatar(URL.createObjectURL(result))
        })
        .catch((error) => console.error(error));
    }
    setIsLoggedIn(!!token);
  }, []);
  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  }
  return (
    <div className="content_1">
      <BtnHome />
      <Search />
      {isLoggedIn ? <Logined /> : <NotLogined />}
    </div>
  );

  function BtnHome() {
    return (
      <div className="btn_home">
        <Link to={'/'}>
          <img src='https://cdn-icons-png.flaticon.com/512/69/69524.png' width="25px" height="25px" alt="" />
        </Link>
      </div>
    );
  }
  function searchHandle(e){
    e.preventDefault();
    const searchValue = document.getElementById("input-search").value;
    navigate(`/search?name=${searchValue}`, {replace:true})
  }
  function Search() {
    return (
      <div className="search">
      <form onSubmit={searchHandle} style={{display: "flex", width: "100%"}}>
        <input id='input-search' type="text" placeholder="Tìm kiếm" autoComplete='off'/>
        <button type='submit'>
          <img src={search} width="25px" height="25px" alt="" />
        </button>
      </form>
      </div>
    );
  }

  // chưa đăng nhập
  function NotLogined() {
    return (
      <div className="account">
        <Link to="/signup">
          <button id="btn_signup" type="button">Đăng ký</button>
        </Link>
        <Link to="/login">
          <button id="btn_login" type="button">Đăng nhập</button>
        </Link>
      </div>
    );
  }

  //đã đăng nhập
  function Logined() {
    return (
      <div className="logined-container">
        <div className='avatar'> 
          <img src={avatar} alt=''></img>
        </div>
        <span>{username}</span>
        <ul className='options'>
          <li><Link to={"/profile"}>Hồ sơ cá nhân</Link></li>
          <li><Link to={"/edit-profile"}>Sửa hồ sơ cá nhân</Link></li>
          <li><Link to={"/upload"}>Đăng nhạc</Link></li>
          <li onClick={handleLogout}>Đăng xuất</li>
        </ul>
      </div>
    );
  }

  
};


