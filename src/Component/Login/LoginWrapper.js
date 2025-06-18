import "./Wrapper.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const LoginWrapper = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Hook chuyển hướng
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (!user) {
      alert("Sai email hoặc mật khẩu.");
      return;
    }

    const token = uuidv4();
    const encodedToken = btoa(token);
    Cookies.set("authToken", encodedToken, {
      expires: 1,
      secure: true,
      sameSite: "Strict",
    });

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Đăng nhập thành công!");
    navigate("/");
  };
  return (
    <div className="login">
      <div className="login-img">
        <a href="/" className="login-return">
          {" "}
          ←{" "}
        </a>
      </div>
      <div className="login-form">
        <div className="login-form1">
          <Link to="/" className="login-text">
            <IoMdClose className="close-icon" />
          </Link>
        </div>
        <div className="login-form2">
          {/* <Register /> */}
          <div className="register-container">
            <h2 className="title">ĐĂNG NHẬP</h2>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="input-group">
                <label>EMAIL *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group password-container">
                <label>MẬT KHẨU *</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </span>
              </div>
              <button type="submit" className="submit-btn">
                TIẾP TỤC
              </button>
              <div className="register-link">
                <p>
                  Chưa có tài khoản?{" "}
                  <a href="/register" className="register-text">
                    Đăng ký ngay
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
