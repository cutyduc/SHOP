import React, { useState, useEffect } from "react";
import "./Cart.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Cart = ({ onClose }) => {
  const token = Cookies.get("authToken");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (token) {
      const userData = JSON.parse(localStorage.getItem("currentUser"));
      if (userData?.cart) {
        setCartItems(userData.cart);
      }
    }
  }, [token]);

  return (
    <div className="cart">
      <div className="cart-header">
        <h4>Giỏ hàng</h4>
        <IoMdClose className="close-icon" onClick={onClose} />
      </div>
      {token ? (
        // ✅ Nếu đã đăng nhập
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <p>Giỏ hàng của bạn hiện đang trống.</p>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <span>{item.name}</span>
                  <span>Số lượng: {item.quantity}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        // ❌ Nếu chưa đăng nhập
        <div className="cart-content">
          <p>Vui lòng đăng nhập để xem giỏ hàng của bạn.</p>
          <Link to="/login" id="login-link">
            Đăng nhập
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
