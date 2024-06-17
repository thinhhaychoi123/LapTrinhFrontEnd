import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Tour du lịch</h5>
                        <p>Chào mừng đến với Công ty Du lịch XYZ, nơi mang đến những trải nghiệm du lịch tuyệt vời và đáng nhớ nhất cho bạn và gia đình. Với chúng tôi, du khách không chỉ đơn giản đi du lịch mà còn được khám phá những vùng đất mới lạ, hấp dẫn và giàu văn hóa. Chúng tôi tự hào là đối tác đáng tin cậy của bạn trong mọi chuyến đi, cam kết mang đến những trải nghiệm du lịch an toàn, chuyên nghiệp và thân thiện với môi trường. Hãy cùng chúng tôi khám phá và tận hưởng những khoảnh khắc đáng nhớ trên mỗi hành trình du lịch của bạn!</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Explore</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Tour trong nước</a></li>
                            <li><a href="#">Tour nước ngoài</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Liên hệ</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Địa chỉ: Biên Hoà, Đồng Nai</a></li>
                            <li><a href="#">Số điện thoại: 0123456789</a></li>
                            <li><a href="#">Gmail: 21130176@st.hcmuaf.edu.vn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                        <p>&copy; {new Date().getFullYear()} Thực hiển bỏi 3 ngự lâm</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
