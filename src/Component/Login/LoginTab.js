import React, { useState } from "react";
import "./LoginTab.css";

const LoginTab = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreePolicy: false,
    subscribe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="register-container">
      <h2 className="title">TẠO TÀI KHOẢN</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-group">
          <label>TÊN *</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>HỌ *</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>EMAIL *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="input-group password-container">
          <label>MẬT KHẨU *</label>
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" name="agreePolicy" checked={formData.agreePolicy} onChange={handleChange} required />
          <label>
            Tôi đã đọc và hiểu rõ thông tin về việc sử dụng dữ liệu cá nhân của mình, được giải thích trong{" "}
            <a href="#">Chính sách Quyền riêng tư</a>.
          </label>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
          <label>
            Tôi muốn nhận tin tức và thông tin thương mại tùy chỉnh từ MASSIMO DUTTI qua email và các phương tiện khác.
          </label>
        </div>

        <button type="submit" className="submit-btn">TIẾP TỤC</button>
      </form>
    </div>
  );
};

export default LoginTab;
