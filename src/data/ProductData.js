// ---------------ProductData.js---------------------
const products = [
    {
        id: 1,
        tour:"Trung Quốc",
        point:"9.3 Tuyệt vời",
        name: "Tour Trung Quốc 4N3Đ: Giang Nam Hành - Thượng Hải - Tô Châu - Ô Trấn - Hàng Châu",
        time:"4 ngày 4 đêm",
        schedule:"23/06/2024",//lịch trình
        image: "https://cdn2.ivivu.com/2024/06/07/19/o-tran-trung-quoc-ivv-360x225.gif",
        image1:"https://cdn2.ivivu.com/2019/10/23/15/ivivu-ben-thuong-hai1-750x390.jpg",
        location:"Giang Nam Hành - Thượng Hải - Tô Châu - Ô Trấn - Hàng Châu",
        content:"Chương trình du lịch Trung Quốc 4 ngày 3 đêm bao gồm các điểm đến nổi tiếng như Thượng Hải, Tô Châu, Ô Trấn và Hàng Châu. Tour mang đến cho du khách cơ hội khám phá sự kết hợp độc đáo giữa văn hóa truyền thống và hiện đại, từ những khu vườn cổ kính ở Tô Châu, làng cổ Ô Trấn, đến vẻ đẹp hiện đại của Thượng Hải - 'Hòn ngọc của phương Đông', và vẻ đẹp nên thơ của Hồ Tây ở Hàng Châu, nơi được biết đến với những truyền thuyết huyền bí. Cùng iVIVU khám phá ngay hôm nay!",        
        price: "12.330.000",
    },
    {
        id: 2,
        tour:"Thái Lan",
        time:"5 ngày 4 đêm",
        point:"9.0 Tuyệt vời",
        schedule:"17/06/2024",//lịch trình
        name: "Tour Thái Lan 5N4Đ: HCM - Xứ Sở Chùa Vàng - Bangkok - Pattaya - Công Viên Khủng Long (Bay Sáng, Trưa)",
        image: "https://cdn2.ivivu.com/2019/10/03/11/ivivu-tran-bao-phat-son1-360x225.jpg",
        location:"Tour Thái Lan 5N4Đ: HCM - Xứ Sở Chùa Vàng - Bangkok - Pattaya - Công Viên Khủng Long",
        content:"Chuyến du lịch 5 ngày từ Sài Gòn đến Bangkok và Pattaya sẽ đưa bạn từ việc thưởng thức bữa tối tại sân bay Bangkok, khám phá cảnh đẹp Pattaya với chợ nổi và massage Thái, đến trải nghiệm biển tại Đảo San Hô Koh Larn và tham quan vườn nhiệt đới Nong Nooch. Bạn cũng sẽ thăm Bảo tàng ánh sáng và mua sắm tại Icon Siam ở Bangkok. Chuyến đi kết thúc với viếng Chùa Thuyền, Chùa Phật Vàng và dạo thuyền trên Sông Chao Phraya, trước khi thưởng thức bữa trưa tại Baiyoke Sky và trở về Việt Nam. Hãy cùng iVIVU khám phá ngay!",
        price: "5.990.000",
    },
    {
        id: 3,
        tour:"Trung Quốc",
        time:"6 ngày 5 đêm",
        point:"8.0 Rất tốt",
        schedule:"19/06/2024",//lịch trình
        name: "Tour Trung Quốc 6N5Đ: HCM - Thành Đô - Cửu Trại Câu - Đô Giang Yển - Công Viên Gấu Trúc",
        image: "https://cdn2.ivivu.com/2023/05/10/14/ivivu-cuu-trai-cau-thac-nuoc-360x225.jpg",
        location:"Tour Trung Quốc 6N5Đ: HCM - Thành Đô - Cửu Trại Câu - Đô Giang Yển - Công Viên Gấu Trúc",
        content:"Khám phá vẻ đẹp hùng vĩ của Thành Đô và Cửu Trại Câu trong chuyến đi 6 ngày 5 đêm từ TP. Hồ Chí Minh. Từ những di sản văn hóa đặc sắc tại Thành cổ Tùng Phan đến vẻ đẹp thiên nhiên kỳ vĩ của Cửu Trại Câu, chuyến đi sẽ là một trải nghiệm đáng nhớ. Thưởng thức ẩm thực địa phương, khám phá công viên Gấu trúc, và tham gia các hoạt động văn hóa tại Đô Giang Yến. Đảm bảo sự thoải mái với dịch vụ lưu trú tại khách sạn 4 sao, hướng dẫn viên nhiệt tình và bữa ăn ngon miệng được bao gồm trong suốt hành trình. Cùng iVIVU khám phá ngay hôm nay! ",
        price: "13.990.000",
    },
    {
        id: 4,
        tour:"Trung Quốc",
        time:"5 ngày 4 đêm",
        point:"8.5 Rất tốt",
        schedule:"26/06/2024",//lịch trình
        name: "Tour Trung Quốc 5N4Đ: HCM - Lệ Giang - Đại Lý - Shangrila (Bay Thẳng VJ)",
        image: "https://cdn2.ivivu.com/2024/06/06/10/nui-tuyet-ngoc-long-ivv-360x225.gif",
        location:"Tour Trung Quốc 5N4Đ: Lệ Giang - Shangrila (Bay Thẳng)",
        content:"Khám phá vẻ đẹp hùng vĩ của Lệ Giang và Shangrila trong 5 ngày 4 đêm. Thưởng ngoạn cảnh quan thiên nhiên tại Khe Hổ Nhảy và Núi Tuyết Ngọc Long, tham quan các di sản văn hóa như Thành cổ DuKeZong và Tu viện Songzanlin. Trải nghiệm văn hóa độc đáo của người Naxi và Tạng, cùng với những khoảnh khắc đáng nhớ tại Công viên Hắc Long Đàm và Ngọc Thủy Trại. Cùng iVIVU khám phá ngay hôm nay!",
        price: "10.000.000",
    },
    {
        id: 5,
        tour:"Đà Nẵng",
        time:"5 ngày 4 đêm",
        point:"8.5 Rất tốt",
        schedule:"26/06/2024",//lịch trình
        name: "Tour Trung Quốc 5N4Đ: HCM - Lệ Giang - Đại Lý - Shangrila (Bay Thẳng VJ)",
        image: "https://cdn2.ivivu.com/2024/06/06/10/nui-tuyet-ngoc-long-ivv-360x225.gif",
        location:"Tour Trung Quốc 5N4Đ: Lệ Giang - Shangrila (Bay Thẳng)",
        content:"Khám phá vẻ đẹp hùng vĩ của Lệ Giang và Shangrila trong 5 ngày 4 đêm. Thưởng ngoạn cảnh quan thiên nhiên tại Khe Hổ Nhảy và Núi Tuyết Ngọc Long, tham quan các di sản văn hóa như Thành cổ DuKeZong và Tu viện Songzanlin. Trải nghiệm văn hóa độc đáo của người Naxi và Tạng, cùng với những khoảnh khắc đáng nhớ tại Công viên Hắc Long Đàm và Ngọc Thủy Trại. Cùng iVIVU khám phá ngay hôm nay!",
        price: "10.000.000",
    },
    

]
export default products;
// ---------------------------------------------------------