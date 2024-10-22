import React from 'react';
import '../Styles/Content1Style.css';
import { Link } from 'react-router-dom';

const Content1 = () => {
  return (
    <div className="content_1">
      <BtnHome />
      <Search />
      <Account />
      {/* <Acc></Acc> */}
    </div>
  );

  function BtnHome() {
    return (
      <div className="btn_home">
        <button type="button" onClick={() => window.location.reload()}>
          <img src={"https://cdn-icons-png.flaticon.com/512/9280/9280598.png"} width="25px" height="25px" alt="" />
        </button>
      </div>
    );
  }

  function Search() {
    return (
      <div className="search">
        <input type="text" placeholder="Tìm kiếm" />
        <button>
          <img src={"https://cdn-icons-png.flaticon.com/512/9280/9280598.png"} width="25px" height="25px" alt="" />
        </button>
      </div>
    );
  }

  // chưa đăng nhập
  function Account() {
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
  function Acc() {
    return (
      <div className="btn_acc">
        <button id="btn_acc" type="button">
          <img src={"https://cdn-icons-png.flaticon.com/512/9280/9280598.png"} width="25px" height="25px" alt="" />
        </button>
      </div>
    );
  }
};

export default Content1;
