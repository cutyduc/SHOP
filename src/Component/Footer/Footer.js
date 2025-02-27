import './Footer.css';


function Footer() {
  return (
    <div className="footer">
      <div className="ssidebar">
      {/* căn vị trí so với siderbar  */}
      </div>

      <div className="content">
        {/* Footer1 */}
        <div className="footer1">
            <h1 >Massimo Dutti</h1>
        </div>
        {/* Footer2 */}
        <div className="footer2">
            {/* footer2-1 */}
            <div className="footer2-1">
              <div className="footer2-1-1">
                <h5>NEWSLETTER</h5>
                <p>Đăng ký nhận bản tin và chúng tôi sẽ gửi thông tin về các sản phẩm và xu hướng mới.</p>
                <button>Đăng ký</button>
              </div>
              <div className="footer2-1-2">
                <h5>SOCIAL</h5>
                <a href='#' >Instagram</a>
                <a href='#' >TikTok</a>
                <a href='#' >X</a>
                <a href='#' >FaceBook</a>
                <a href='#' >Pinterest</a>
                <a href='#' >Youtube</a>
                
              </div>
            </div>
            {/* footer2-2 */}
            <div className="footer2-2">
                <div className="footer2-2-1">
                  <h5>GIÚP ĐỠ</h5>
                  <a href='#' >Liên hệ</a>
                  <a href='#' >Các câu hỏi thường gặp</a>
                  <a href='#' >Trợ năng</a>
                  <a href='#' >Theo dõi đơn hàng của bạn </a>
                </div>
                <div className="footer2-2-2">
                  <h5>CÁC DỊCH VỤ</h5>
                  <a href='#' >Phiếu giảm giá điện tử</a>
                  <a href='#' >Thông tin giao hàng</a>
                </div> 
                <div className="footer2-2-3">
                <h5>PHÁP LÝ </h5>
                  <a href='#' >Điều kiện mua hàng</a>
                  <a href='#' >Thông tin khách hàng và chính sách quyền riêng tư</a>
                  <a href='#' >Chính sách trả lại hàng</a>
                  <a href='#' >Thông tin về Cookies</a>
                  <a href='#' >Cài đặt Cookies</a>
                </div>
                <div className="footer2-2-4">
                <h5>CÔNG TY </h5>
                  <a href='#' >Tải về úng dụng của chúng tôi </a>
                  <a href='#' >Về Massimo Dutti </a>
                  <a href='#' >Công cụ định vị của hàng </a>
                  <a href='#' >Press </a>
                  
                </div>
            </div>
            {/* footer2-3 */}
            <div className="footer2-3">
                <a href='#' >THAY ĐỔI THỊ TRƯỜNG: VIET NAM (VND) </a>
                <a href='#' >VN</a>
                <p> | </p>
                <a href='#' >EN</a>
            </div>
            {/* footer2-4 */}
            <div className="footer2-4">
                <div className="footer2-4-1">
                  <p>CTY TNHH MITRAMODE DUTA FASHINDO VIỆT NAM</p>
                  <p>Giấy CNĐKDN: 0314222123 - Ngày cấp: 08/02/2017, được sửa đổi lần thứ 2 ngày 09/02/2021</p>
                  <p>Cơ quan cấp: Phòng Đăng Ký Kinh Doanh - Sở Kế Hoạch và Đầu Tư TPHCM</p>
                  <p>Địa chỉ đăng ký kinh doanh: Tầng 4A, Tòa Nhà Vincom Center, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TPHCM, Việt Nam</p>
                  <p>eMail ; contact.vn@massimodutti.com</p>
                </div>
                <div className="footer2-4-2">
                  <img src="./IMG/logoTb_2.webp" alt="Google Logo" width="100" height="50"/>
                </div>
            </div>

        </div>
      </div>

      
    </div>
  );
}
export default Footer;