import './App.css';
import Page1 from './Component/Page1/Page1';
import Page2 from './Component/Page2/Page2';
import Sidebar from './Component/SideBar/SideBar';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Sidebar />
          <Routes>  
              <Route path="/" element={<Page1 />} />
              <Route path="/nu" element={<Page1 />} />
              <Route path="/nam" element={<Page2/>} />
          </Routes>
          {/* <Page1 />
          <Page2 /> */}
          
          <Footer />
      </Router>
    </div>
  );
}

export default App;
