import { SiZalo } from "react-icons/si";
import { BsFacebook, BsMessenger, BsYoutube } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiFillInstagram, AiOutlineUnorderedList } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiNetworkChart, BiSlideshow } from "react-icons/bi";
import { TbListDetails, TbSlideshow } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";
import { CgListTree } from "react-icons/cg";

export const IconMapping = {
  SiZalo: SiZalo,
  BsFacebook: BsFacebook,
  HiOutlineUserGroup: HiOutlineUserGroup,
  BsMessenger: BsMessenger,
  AiFillInstagram: AiFillInstagram,
  FaTiktok: FaTiktok,
  AiOutlineTwitter: AiOutlineTwitter,
  BsYoutube: BsYoutube,
  BiSlideshow: BiSlideshow,
  TbListDetails: TbListDetails,
  TbSlideshow: TbSlideshow,
  BiNetworkChart: BiNetworkChart,
  MdOutlinePostAdd: MdOutlinePostAdd,
  AiOutlineUnorderedList: AiOutlineUnorderedList,
  CgListTree: CgListTree,
};

export const ProductSidebarAdmin = [
  {
    name: "Danh sách sản phẩm",
    icon: "AiOutlineUnorderedList",
  },
  {
    name: "loại sản phẩm",
    icon: "CgListTree",
  },
];

export const WebsiteSidebarAdmin = [
  {
    name: "Thông tin website",
    icon: "TbListDetails",
  },
  {
    name: "Slide trình chiếu",
    icon: "TbSlideshow",
  },
  {
    name: "Kênh truyền thông",
    icon: "BiNetworkChart",
  },
  {
    name: "Các bài viết",
    icon: "MdOutlinePostAdd",
  },
  {
    name: "Video",
    icon: "BiSlideshow",
  },
];

export const SocialMediaDashboard = [
  {
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-400 hover:bg-white w-10",
  },
  {
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },
  {
    title: "Trang Fanpage",
    icon: "HiOutlineUserGroup",
    image:
      "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
    style: "hover:bg-white hover:text-black p-1",
  },
  {
    title: "Trang Messenger",
    icon: "BsMessenger",
    image:
      "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang Instagram",
    icon: "AiFillInstagram",
    image: "https://images2.alphacoders.com/123/1230947.png",
    style: "hover:bg-pink-500 hover:text-white",
  },

  {
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    title: "Trang Twitter",
    icon: "AiOutlineTwitter",
    image:
      "https://vietnix.vn/wp-content/uploads/2022/07/mang-xa-hoi-twitter.webp",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

//Custom

export const HeaderItems = [
  {
    Content: "Trang chủ",
    link: "/",
    title: [
      {
        name: "Chiến dịch thương hiệu: Mình Còn Cần Nhau?",
        link: "https://www.prudential.com.vn/vi/chien-dich-thuong-hieu/minh-con-can-nhau/",
      },
    ],
  },
  {
    Content: "Tôi là NAM PRU",
    link: "/introduction",
    title: [
      {
        name: "Kế hoạch bảo vệ & chăm sóc sức khỏe",
        link: "https://www.prudential.com.vn/vi/chien-dich-thuong-hieu/minh-con-can-nhau/",
      },
    ],
  },
  {
    Content: "Tham gia Bảo hiểm cùng NAM PRU",
    link: "/products",
    title: [
      {
        name: "Chiến dịch thương hiệu: Mình Còn Cần Nhau?",
        link: "https://www.prudential.com.vn/vi/chien-dich-thuong-hieu/minh-con-can-nhau/",
      },
    ],
  },
  {
    Content: "Phát triển Sự nghiệp cùng NAM PRU",
    link: "/jobs",
    title: [
      {
        name: "Tìm hiểu Pulse ",
        link: "https://www.prudential.com.vn/vi/chien-dich-thuong-hieu/minh-con-can-nhau/",
      },
    ],
  },

  {
    Content: "Thông tin liên hệ",
    link: "/contact",
    title: [
      {
        name: " Giải quyết quyền lợi bảo hiểm ",
        link: "https://www.prudential.com.vn/vi/chien-dich-thuong-hieu/minh-con-can-nhau/",
      },
    ],
  },
];

export const FooterItems = [
  {
    title: "Pulse Nhịp Sống Khỏe",
    content: [
      {
        text: "Trang chủ",
        link: "/",
      },
      {
        text: "Tìm hiểu Pulse",
        link: "https://www.prudential.com.vn/vi/tim-hieu-pulse/",
      },
      {
        text: "Blog Nhịp Sống Khỏe",
        link: "https://www.prudential.com.vn/vi/blog-nhip-song-khoe/",
      },
      {
        text: "Pulse Rewards",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
    ],
  },
  {
    title: "Sản phẩm bảo hiểm",
    content: [
      {
        text: "Sản phẩm bảo hiểm chính",
        link: "/",
      },
      {
        text: "Kế hoạch bảo vệ & chăm sóc sức khỏe",
        link: "https://www.prudential.com.vn/vi/tim-hieu-pulse/",
      },
      {
        text: "Kế hoạch tích lũy",
        link: "https://www.prudential.com.vn/vi/blog-nhip-song-khoe/",
      },
      {
        text: "Kế hoạch đầu tư",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
      {
        text: "Sản phẩm bảo hiểm bổ trợ",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
      {
        text: "Thông tin các Quỹ đầu tư",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
      {
        text: "Tài liệu và biểu mẫu tham khảo",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
      {
        text: "Chương trình khuyến mại",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
    ],
  },
  {
    title: "Chăm sóc khách hàng",
    content: [
      {
        text: "Giải quyết quyền lợi bảo hiểm",
        link: "/",
      },
      {
        text: "Kênh thanh toán phí bảo hiểm",
        link: "https://www.prudential.com.vn/vi/tim-hieu-pulse/",
      },
      {
        text: "PRUOnline – Cổng thông tin khách hàng",
        link: "https://www.prudential.com.vn/vi/blog-nhip-song-khoe/",
      },
      {
        text: "PRURewards – Đổi điểm nhận quà",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
      {
        text: "Thông tin & ưu đãi dịch vụ",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
    ],
  },
  {
    title: "Cơ hội nghề nghiệp",
    content: [
      {
        text: "Cơ hội nghề nghiệp tại Prudential",
        link: "/",
      },
      {
        text: "Cơ hội phát triển tại Kênh hợp tác kinh doanh",
        link: "https://www.prudential.com.vn/vi/tim-hieu-pulse/",
      },
      {
        text: "PRUPlanner – Chuyên viên hoạch định tài chính",
        link: "https://www.prudential.com.vn/vi/blog-nhip-song-khoe/",
      },
      {
        text: "Chuyên viên hoạch định tài chính Prudential - Kênh đại lý",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
    ],
  },
  {
    title: "Prudential Việt Nam",
    content: [
      {
        text: "Tìm hiểu về Prudential",
        link: "/",
      },
      {
        text: "Phát triển cộng đồng bền vững",
        link: "https://www.prudential.com.vn/vi/tim-hieu-pulse/",
      },
      {
        text: "Thông cáo báo chí",
        link: "https://www.prudential.com.vn/vi/blog-nhip-song-khoe/",
      },
      {
        text: "Chiến dịch thương hiệu",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
      {
        text: "Liên hệ",
        link: "https://www.prudential.com.vn/vi/pulse-rewards/",
      },
    ],
  },
];
export const PersonaSection2 = [
  {
    name: "Tin tức    ",
  },
  {
    name: "Khuyến mại",
  },
  {
    name: "PRURewards",
  },
  {
    name: "Dịch vụ",
  },
];

export const PersonaSection4 = [
  {
    name: "Bảo hiểm cho con",
  },
  {
    name: "Bảo hiểm đầu tư",
  },
  {
    name: "Bảo hiểm nhân thọ",
  },
  {
    name: "Bảo hiểm sức khỏe",
  },
];

export const BrickSize = [
  { id: 1, name: "15x90" },
  { id: 2, name: "50x50" },
  { id: 3, name: "60x60" },
  { id: 4, name: "80x80" },
  { id: 5, name: "60x120" },
];

export const BrickType = [
  { id: 1, name: "GC" },
  { id: 2, name: "GK" },
  { id: 3, name: "Matt" },
  { id: 4, name: "Polished" },
];

export const JobSection2Card = [
  {
    image:
      "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/our-purpose-366x206.jpg",
    title: "Tôn chỉ mục đích",
    content:
      "Minh chứng rõ ràng nhất cho mục đích này chính là cách chúng tôi cống hiến cho xã hội thông qua những việc mà chúng tôi làm và cách mà chúng tôi hỗ trợ lẫn nhau. ",
  },
  {
    image:
      "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/our-principle-366x206.jpg",
    title: "Nguyên tắc",
    content:
      "Trong quá trình phát triển và tiến tới tương lai tốt đẹp hơn, cam kết của chúng tôi với tôn chỉ được đặt ra luôn kiên định: đặt khách hàng lên hàng đầu, hành động chính trực, đón đầu sự phát triển, đầu tư vào cộng đồng và hướng tới tầm nhìn dài hạn - bởi chúng tôi sẽ còn tiếp tục phát triển tại đây trong tương lai lâu dài.",
  },
  {
    image:
      "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/our-value-366x206.jpg",
    title: "Giá trị cốt lõi",
    content:
      "Thành công của chúng tôi được tạo ra từ những giá trị cốt lõi, những giá trị thể hiện sâu sắc và rõ ràng nhất chúng tôi là ai - Khát vọng, Hiếu kì, Đồng cảm, Can đảm và Sắc bén.",
  },
];

export const ProductSection2 = [
  {
    name: "Bệnh hiểm nghèo    ",
  },
  {
    name: "Chăm sóc sức khỏe",
  },
  {
    name: "Tai nạn",
  },
  {
    name: "Tình trạng tổn thương theo mức độ",
  },
  {
    name: "Tử vong và thương tật",
  },
];

export const HomeSection6Card = [
  {
    title: "Về tập đoàn Prudential",
    content:
      "Tập đoàn Prudential là một trong những tập đoàn tài chính hàng đầu thế giới, cung cấp các sản phẩm bảo hiểm nhân thọ, dịch vụ tài chính và quản lý tài sản tại Vương quốc Anh, Mỹ và Châu Á.",
    image:
      "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/ve-prudential/2020/ve-prudential-tap-doan-desktop-266x354.jpg",
    link: "https://www.prudential.com.vn/vi/tim-hieu-ve-prudential-viet-nam/tap-doan-prudential/",
  },
  {
    title: "Lịch sử phát triển Prudential Việt Nam",
    content:
      "Với tuyên ngôn thương hiệu “Lắng nghe. Thấu Hiểu. Hành động.”, Prudential khẳng định cam kết luôn đặt khách hàng làm trọng tâm trong suốt quá trình hoạt động.",
    image:
      "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/ve-prudential/2020/ve-prudential-lich-su-phat-trien-desktop-266x354.jpg",
    link: "https://www.prudential.com.vn/vi/tim-hieu-ve-prudential-viet-nam/lich-su-phat-trien/",
  },
  {
    title: "Thành tích và Giải thưởng",
    content:
      "Với những nỗ lực và đóng góp tích cực tại Việt Nam, Prudential vinh dự được trao tặng nhiều giải thưởng và danh hiệu cao quý.",
    image:
      "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/ve-prudential/2020/ve-prudential-thanh-tich-giai-thuong-desktop-266x354.jpg",
    link: "https://www.prudential.com.vn/vi/tim-hieu-ve-prudential-viet-nam/thanh-tich-giai-thuong/",
  },
  {
    title: "Báo cáo tài chính",
    content:
      "Tham khảo Báo cáo tài chính được cập nhật hàng năm của Prudential Việt Nam.",
    image:
      "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/ve-prudential/2020/ve-prudential-bao-cao-tai-chinh-desktop-266x354.jpg",
    link: "https://www.prudential.com.vn/vi/tim-hieu-ve-prudential-viet-nam/bao-cao-tai-chinh/",
  },
];

export const AdminPostSection = [
  {
    name: "Thông tin mới",
  },
  {
    name: "Kiến thức bảo hiểm",
  },
  {
    name: "Sản phẩm bảo hiểm bổ trợ",
  },
];
