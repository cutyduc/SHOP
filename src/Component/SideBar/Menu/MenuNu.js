import React, { useState } from "react";
import './MenuNu.css';
import { Link } from "react-router-dom";

const MenuNu = () => {
    const arrayNu = [
    {
        name: "HÀNG MỚI ",
        link: "#",
     },
    {
        name: "LINEN",
        link: "#",
      },
    {
        name: "EXCLUSIVE COLLECTION ",
        link: "#",
     },
    {
        name: "GÍA ĐẶC BIỆT",
        link: "#",
     },
    {
        name: "DA ",
        link: "#",
     },
     {
        name: "ÁO KHOÁC",
        link: "#",
     },
     {
        name: "ÁO PARKA VÀ ÁO KHOÁC TRENCH COAT ",
        link: "#",
     },
     {
        name: "ÁO LEN VÀ CARDIGAN",
        link: "#",
     },
     {
        name: "QUẦN",
        link: "#",
     },
     {
        name: "QUẦN JEAN",
        link: "#",
     },
     {
        name: "ÁO SƠ MI VÀ ÁO NỮ ",
        link: "#",
     },
     {
        name: "VÁY ",
        link: "#",
     },
     {
        name: "CHÂN VÁY ",
        link: "#",
     },
     {
        name: "ÁO PHÔNG",
        link: "#",
     },
     {
        name: "ÁO",
        link: "#",
     },
     {
        name: "ÁO KHOÁC BLAZE",
        link: "#",
     },
     {
        name: "BỘ VETS ",
        link: "#",
     },
     {
        name: "ÁO GI LÊ",
        link: "#",
     },
     {
        name: "DỆT KIM ",
        link: "#",
     },
     {
        name: "DIỆN MẠO TỔNG THỂ",
        link: "#",
     },
     {
        name: "GIẦY",
        link: "#",
     },
     {
        name: "TÚI ",
        link: "#",
     },
     {
        name: "PHỤ KIỆN",
        link: "#",
     },
     {
        name: "TRANG SỨC",
        link: "#",
     },
     {
        name: "NƯỚC HOA",
        link: "#",
     },
    ];
       
  
      
return (
    <div>
        {arrayNu.map((item, index) => (
            <Link to={item.link} key={index} className="menu2-2">
                {item.name}
            </Link>
        ))}
    </div>
);
} 
export default MenuNu;