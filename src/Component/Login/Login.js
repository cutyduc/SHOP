import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import LoginTab from "./LoginTab";


const Login = () => {
  return (
    <div className="login">
      <div className="login-img">   
        <a href="/" className="login-return"> ← </a>

      </div>
            <div className="login-form"> 
                <div className="login-form1">
                    <a href="/" className="login-text">Đăng Nhập / Đăng Ký </a>
                </div>
                <div className="login-form2">
                    <LoginTab />
                </div>
            </div>
           
    </div>
  );
};

export default Login;