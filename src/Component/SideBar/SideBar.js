
import React, { useState } from "react";
import './SideBar.css';
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="header" >
        {/* header1 */}
        <div className="header1 sidebar">
            <ul >
                <li>
                    <a href="#">☰</a>
                    <ul>
                        {/* menu o day */}
                    </ul>
                </li>
                <li><Link to="/nu">NỮ</Link></li>
                <li><Link to="/nam">NAM</Link></li>
            </ul>
        </div>

        {/* header2 */}
        <div className="header2 sidebar">
          <a href="#">TÌM KIẾM</a>
        </div>

        {/* header3 */}
        <div className="header3 sidebar">
        <ul >
          <li className="right"><a href="#">ĐĂNG NHẬP / ĐĂNG KÝ</a></li>
          <li className="right"><a href="#">GIỎ HÀNG CỦA TÔI</a></li>
        </ul>
        </div>
    </div>
  );
};

export default Sidebar;