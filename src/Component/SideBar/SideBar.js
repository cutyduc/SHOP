import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import MenuNu from "./Menu/MenuNu";
import MenuNam from "./Menu/MenuNam";
import Cart from "./Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng menu
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile); // Đảo trạng thái khi click
  };
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    Cookies.remove("authToken");
    window.location.reload(); // hoặc navigate("/") nếu dùng react-router
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Đảo trạng thái khi click
  };

  const [isMenu, setIsMenu] = useState(false);

  const [isCart, setIsCart] = useState(false); // Trạng thái mở/đóng giỏ hàng
  const toggleCart = () => {
    setIsCart(!isCart);
  }; // Đảo trạng thái khi click

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div id="header">
      {/* header1 */}
      <div className="header1 sidebar">
        <ul>
          <li>
            <a href="#" onClick={toggleMenu}>
              {" "}
              {isOpen ? "✖" : "☰"}
            </a>
          </li>

          <li>
            <Link to="/nu">NỮ</Link>
          </li>
          <li>
            <Link to="/nam">NAM</Link>
          </li>
          <li>
            <Link to="/product">SẢN PHẨM</Link>
          </li>
        </ul>
      </div>
      {isOpen && ( // Nếu isOpen === true thì hiển thị menu
        <div className="menu">
          <div className="menu1">
            <h className="content-menu1">Massimi Dutti </h>
            <div className="link">
              <li>
                <Link
                  to="/nu"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  NỮ
                </Link>
              </li>
              <li>
                <Link
                  to="/nam"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  NAM
                </Link>
              </li>
            </div>
          </div>
          <div className="menu2">
            <div className="menu2-0">
              <a className="menu2-1" onClick={() => setIsMenu(!isMenu)}>
                BỘ SƯU TẬP MỚI {isMenu ? "−" : "+"}
              </a>
            </div>
            {isMenu && (
              <div className="submenu">
                <Routes>
                  <Route path="/nu" element={<MenuNu />} />
                  <Route path="/nam" element={<MenuNam />} />
                </Routes>
              </div>
            )}

            <a href="/" className="menu2-2">
              GIẢM GIÁ{" "}
            </a>
            <a className="menu2-3">THẾ GIỚI MASSIMO DUTTI </a>
            <a className="menu2-4">THAM GIA CUỘC SỐNG </a>
            <a className="menu2-5">LIÊN HỆ</a>
          </div>
        </div>
      )}

      {/* header2 */}
      <div className="header2 sidebar">
        <a href="#">TÌM KIẾM</a>
      </div>

      {/* header3 */}
      <div className="header3 sidebar">
        <ul>
          <li id="profile" className="right">
            {currentUser ? (
              <span>
                <a onClick={toggleProfile}>
                  {currentUser.firstName.toUpperCase()}
                </a>
                {showProfile && (
                  <ul className="dropdown">
                    <li>
                      <Link id="profile-link" to="/profile">
                        Thông tin cá nhân
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Đăng xuất</button>
                    </li>
                  </ul>
                )}
              </span>
            ) : (
              <a href="/register">ĐĂNG NHẬP / ĐĂNG KÝ</a>
            )}
          </li>
          <li className="right">
            <a href="#" onClick={toggleCart}>
              GIỎ HÀNG CỦA TÔI
            </a>
          </li>

          {isCart && <Cart onClose={toggleCart} />}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
