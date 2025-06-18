import "./Page2.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Page2() {
  return (
    <div className="Page">
      <div className="Page2">
        <Link to="/product?category=Hàng mới về&gender=Nam" className="a1">
          Hàng Mới Về
        </Link>
      </div>
      <div className="Page2">
        <Link to="/product?category=áo&gender=Nam" className="a1">
          Áo
        </Link>
      </div>
      <div className="Page2">
        <Link to="/product?category=quần&gender=Nam" className="a1">
          Quần
        </Link>
      </div>
      <div className="Page2">
        <Link to="/product?category=Best seller&gender=Nam" className="a1">
          Best Seller
        </Link>
      </div>
    </div>
  );
}
export default Page2;
