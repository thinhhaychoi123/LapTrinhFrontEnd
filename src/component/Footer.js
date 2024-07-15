import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="">
        <footer className="bg-body-tertiary">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Giới thiệu tour du lịch</h5>
                <p>
                  Tour du lịch là một hình thức du lịch trọn gói, bao gồm các
                  dịch vụ như: phương tiện di chuyển, chỗ ở, vé tham quan, ăn
                  uống, hướng dẫn viên,... giúp bạn tận hưởng trọn vẹn kỳ nghỉ
                  của mình mà không cần phải lo lắng về bất cứ điều gì.
                </p>
              </div>

              <div className="col-lg-6">
                <h5 className="text-uppercase">Liên hệ</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-body">
                      Địa chỉ: Long Binh, Biên Hoà, Đồng Nai
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-body">
                      Số điện thoại: 0123456789
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-body">
                      Email: 21130176@st.hcmuaf.edu.vn
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
            © 2024 Copyright:
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
