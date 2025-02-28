import React, { useState } from "react";
import './MenuNam.css';
import { Link } from "react-router-dom";

const MenuNam = () => {
    const arrayNam = [
    {
        name: "HÀNG MỚI",
        link: "#",
     },
    {
        name: "EXCLUSIVE COLLECTION",
        link: "#",
      },
    {
        name: "DA",
        link: "#",
     },
    {
        name: "GÍA ĐẶC BIỆT",
        link: "#",
     },
    {
        name: "ÁO LEN ",
        link: "#",
     },
     {
        name: "ÁO CARDIGAN",
        link: "#",
     },
     {
        name: "ÁO PARKA VÀ ÁO KHOÁC TRENCH COAT ",
        link: "#",
     },
     {
        name: "ÁO KHOÁC DA ",
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
        name: "ÁO SƠ MI",
        link: "#",
     },
     {
        name: "ÁO PHÔNG  ",
        link: "#",
     },
     {
        name: "ÁO POLO ",
        link: "#",
     },
     {
        name: "DỆT KIM ",
        link: "#",
     },
     {
        name: "ÁO KHOÁC BLAZE",
        link: "#",
     },
     {
        name: "ÁO OVERSIZE ",
        link: "#",
     },
     {
        name: "BỘ VETS ",
        link: "#",
     },
     {
        name: "MAY ĐO CÁ NHÂN ",
        link: "#",
     },
     {
        name: "TOTAL LOOK  ",
        link: "#",
     },
    
     {
        name: "GIẦY",
        link: "#",
     },
    
     {
        name: "PHỤ KIỆN",
        link: "#",
     },
     {
        name: "ĐỒ NGỦ VÀ ĐỒ LÓT",
        link: "#",
     }
    ];
       
      
      
return (
    <div>
        {arrayNam.map((item, index) => (
            <Link to={item.link} key={index} className="menu2-2">
                {item.name}
            </Link>
        ))}
    </div>
);
} 
export default MenuNam;