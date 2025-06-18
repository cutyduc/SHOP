import "./App.css";
import Page1 from "./Component/Page1/Page1";
import Page2 from "./Component/Page2/Page2";
import Sidebar from "./Component/SideBar/SideBar";
import Footer from "./Component/Footer/Footer";
import RegisterWrapper from "./Component/Login/RegisterWrapper";
import LoginWrapper from "./Component/Login/LoginWrapper";
import Product from "./Component/product/product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const authRoutes = ["/register", "/login"]; // Danh sách các đường dẫn không có sidebar và footer
  const isAuthPage = authRoutes.includes(location.pathname); // Kiểm tra xem đường dẫn có trong danh sách không
  return (
    <div className="App">
      {!isAuthPage && <Sidebar />}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/nu" element={<Page1 />} />
        <Route path="/nam" element={<Page2 />} />
        <Route path="/register" element={<RegisterWrapper />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      {!isAuthPage && <Footer />}

      {/* <Login/> */}
    </div>
  );
}
export default App;
