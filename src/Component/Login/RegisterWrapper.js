import "./Wrapper.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const RegisterWrapper = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreePolicy: false,
    subscribe: false,
  });
  const navigate = useNavigate(); // Hook chuyển hướng
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lấy danh sách người dùng từ localStorage (nếu có)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra tài khoản đã tồn tại chưa
    const exists = users.some((user) => user.email === formData.email);
    if (exists) {
      alert("Tài khoản đã tồn tại.");
      return;
    }

    // Thêm người dùng mới
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    e.target.reset(); // Reset form
    navigate("/login");
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
            <h2 className="title">TẠO TÀI KHOẢN</h2>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="input-group">
                <label>TÊN *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>HỌ *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

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

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="agreePolicy"
                  checked={formData.agreePolicy}
                  onChange={handleChange}
                  required
                />
                <label>
                  Tôi đã đọc và hiểu rõ thông tin về việc sử dụng dữ liệu cá
                  nhân của mình, được giải thích trong{" "}
                  <a href="#">Chính sách Quyền riêng tư</a>.
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                />
                <label>
                  Tôi muốn nhận tin tức và thông tin thương mại tùy chỉnh từ
                  MASSIMO DUTTI qua email và các phương tiện khác.
                </label>
              </div>

              <button type="submit" className="submit-btn">
                TIẾP TỤC
              </button>
              <p className="login-link">
                Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWrapper;
