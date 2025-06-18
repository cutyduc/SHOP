import "./Page1.css";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <div className="Page">
      <div className="Page1">
        <Link to="/product?category=Hàng mới về&gender=Nữ" className="a1">
          Hàng Mới Về
        </Link>
      </div>
      <div className="Page1">
        <Link to="/product?category=áo&gender=Nữ" className="a1">
          Áo
        </Link>
      </div>
      <div className="Page1">
        <Link to="/product?category=quần&gender=Nữ" className="a1">
          Quần
        </Link>
      </div>
      <div className="Page1">
        <Link to="/product?category=Best seller&gender=Nữ" className="a1">
          Best Seller
        </Link>
      </div>
    </div>
  );
}
export default Page1;
