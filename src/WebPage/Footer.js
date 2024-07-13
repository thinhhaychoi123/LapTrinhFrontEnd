import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="">
        <footer className="bg-body-tertiary">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-8 mb-4 mb-md-0">
                <h5 className="text-uppercase">Tour du lịch</h5>
                <p>
                  Hãy cùng khám phá những điều kỳ diệu trên mỗi chuyến đi với
                  tour du lịch của chúng tôi! Tận hưởng không gian mới lạ, khám
                  phá văn hóa độc đáo và tạo dấu ấn đặc biệt trong kỷ niệm của
                  bạn. Đội ngũ chuyên gia của chúng tôi sẵn sàng mang đến cho
                  bạn những trải nghiệm tuyệt vời và những khoảnh khắc khó quên
                  trên mọi hành trình. Hãy đồng hành cùng chúng tôi và để lại
                  những dấu ấn đẹp trong cuộc đời của bạn!
                </p>
              </div>

              <div className="col-lg-4">
                <h5 className="text-uppercase">Liên hệ:</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-body">
                      <i className="bi bi-geo-alt me-2"></i> Địa chỉ: Phường Long
                      Bình, Thành phố Biên Hoà, Tỉnh Đồng Nai
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-body">
                    <i class="bi bi-telephone-fill me-2"></i> Số điện thoại: 0324678328
                    </a>
                  </li> 
                  <li>
                    <a href="#!" className="text-body">
                    <i class="bi bi-envelope me-2"></i>email: 21130176@st.hcmuaf.edu.vn
                    </a>
                  </li>  

                  </ul>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2020 Copyright:{" "}
            <a className="text-body" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
