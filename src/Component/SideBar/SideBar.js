
import React, { useState } from "react";
import './SideBar.css';
import { Link } from "react-router-dom";
import MenuNu from "./Menu/MenuNu";
import MenuNam from "./Menu/MenuNam";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Đảo trạng thái khi click
 };
 const [isMenu, setIsMenu] = useState(false);
  return (
    <div id="header" >
        {/* header1 */}
        <div className="header1 sidebar">
            <ul >
                <li>
                    <a href="#" onClick={toggleMenu}> {isOpen ? "✖" : "☰"}</a>
                </li>
            
                <li><Link to="/nu">NỮ</Link></li>
                <li><Link to="/nam">NAM</Link></li>
            </ul>
        </div>
        {isOpen && ( // Nếu isOpen === true thì hiển thị menu
              <div className="menu">
                <div className="menu1">
                    <h className='content-menu1'>Massimi Dutti </h>
                    <div className="link">
                      <li><Link to="/nu" style={{ textDecoration: "none", color: "black" }}>NỮ</Link></li>
                      <li><Link to="/nam"style={{ textDecoration: "none", color: "black" }} >NAM</Link></li>
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
                            <Route path="/nam" element={<MenuNam/>} />
                          </Routes>
                        </div>
                      )}
                  
                    <a className="menu2-2">GIẢM GIÁ </a>
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
        <ul >
          <li className="right"><a href="/login">ĐĂNG NHẬP / ĐĂNG KÝ</a></li>
          <li className="right"><a href="#">GIỎ HÀNG CỦA TÔI</a></li>
        </ul>
        </div>
    </div>
  );
};

export default Sidebar;