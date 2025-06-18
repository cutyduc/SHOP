import React from "react";
import "./product.css"; // Import CSS styles for the product component
import {
  getAllProducts,
  getProductsByCategoryAndGender,
} from "../../route/product"; // Import the function to get all products
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getAllProducts();
    setAllProducts(data);
  }, []);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.get("category");
  const gender = queryParams.get("gender");

  useEffect(() => {
    if (category || gender) {
      const filtered = getProductsByCategoryAndGender(
        allProducts,
        category,
        gender
      );
      setProducts(filtered);
    } else {
      setProducts(allProducts); // Nếu không có lọc, hiển thị tất cả
    }
  }, [category, gender, allProducts]);

  console.log(products);
  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Bạn cần đăng nhập để thêm vào giỏ hàng.");
      return;
    }

    const cart = user.cart || [];

    // Kiểm tra sản phẩm đã có trong giỏ chưa (nếu muốn tăng số lượng có thể xử lý thêm)
    const isExist = cart.find((item) => item.id === product.id);
    if (isExist) {
      alert("Sản phẩm đã có trong giỏ hàng.");
      return;
    }

    cart.push(product);
    user.cart = cart;

    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Đã thêm vào giỏ hàng!");
  };

  return (
    <div className="productWrapper">
      <h1 className="product-title">Sản phẩm</h1>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Giá: {product.price.toLocaleString()}đ</p>
            </div>
            <div className="product-actions">
              <button className="view-details">Xem chi tiết</button>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
