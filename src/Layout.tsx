import "./asset/CSS/layout.css";
import logo from "./asset/CSS/images/Ten-truong-do-1000x159.png";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="banner">
          {/* Menu trái */}
          <nav className="nav-left">
            <ul className="nav-list">
              <li>
                <Link to="/">TRANG CHỦ</Link>
              </li>
              <li>
                <Link to="/trang1">EGOV</Link>
              </li>
              <li>
                <Link to="/trang2">SINH VIÊN</Link>
              </li>
              <li>
                <Link to="/listsanpham">SẢN PHẨM</Link>
              </li>
            </ul>
          </nav>

          {/* Logo giữa */}
          <div className="logo-center">
            <Link to="/">
              <img src={logo} alt="Logo trường" className="logo-img" />
            </Link>
          </div>

          {/* Tìm kiếm phải */}
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm..." />
            <button>Tìm</button>
          </div>
        </div>

        {/* Thanh đỏ bên dưới */}
        <div className="menubar">
          🎉 ƯU ĐÃI ĐẶC BIỆT - CHÀO MỪNG SINH VIÊN MỚI 2025 🎉
        </div>
      </header>

      {/* ===== NỘI DUNG TRANG ===== */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Liên hệ</h4>
            <p>Địa chỉ: 123 Đường ABC, TP. XYZ</p>
            <p>Email: lienhe@qdh.edu.vn</p>
            <p>Điện thoại: (0123) 456 789</p>
          </div>
          <div className="footer-section">
            <h4>Liên kết nhanh</h4>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/trang1">Egov</Link>
              </li>
              <li>
                <Link to="/trang2">Sinh viên</Link>
              </li>
              <li>
                <Link to="/listsanpham">Sản phẩm</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Bản đồ</h4>
            <div className="map-placeholder">
              [Bản đồ trường - có thể tích hợp Google Maps sau]
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 - Trường Đại học QDH. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
