export type FounderChapter = {
  id: string;
  image: string;
  title: string;
  summary: string;
};

export const FOUNDER_CHAPTERS: FounderChapter[] = [
  {
    id: "hero",
    image: "/images/founders/01-hero.png",
    title: "Câu chuyện hai người tiên phong",
    summary:
      "Hành trình đầy cảm hứng của anh Tường Tuấn và chị Hà Lê Vân — những người sáng lập câu lạc bộ Toastmasters chính thức đầu tiên sử dụng tiếng Việt tại Hà Nội (2017–2019).",
  },
  {
    id: "disappointment",
    image: "/images/founders/02-disappointment.png",
    title: "Thất vọng với phiên bản giả",
    summary:
      "Năm 2017, anh Tuấn và chị Vân tham gia lớp khởi nghiệp và được giới thiệu một “Câu lạc bộ Toastmasters”. Thực tế chỉ là mô phỏng — không có chương trình chính thức, chỉ để bán khóa học, thiếu tính chuyên nghiệp. “Chúng ta cần có thứ tốt hơn thế này!”",
  },
  {
    id: "vision",
    image: "/images/founders/03-vision.png",
    title: "Tầm nhìn của chị Vân",
    summary:
      "Ba tuần nghiên cứu không ngừng: đọc tài liệu Toastmasters International, hiểu rõ chương trình giáo dục, nhận ra tiềm năng to lớn — và quyết tâm thành lập câu lạc bộ chính thức.",
  },
  {
    id: "barriers",
    image: "/images/founders/04-barriers.png",
    title: "Những rào cản lớn",
    summary:
      "Vấn đề pháp lý về tổ chức xã hội, rào cản ngôn ngữ (“Có thể dùng tiếng Việt không?”), thiếu mạng lưới Toastmasters hỗ trợ, và thái độ tiêu cực rằng “không thể thành lập CLB tiếng Việt”.",
  },
  {
    id: "pipat",
    image: "/images/founders/05-pipat-meeting.png",
    title: "Cuộc gặp gỡ thay đổi tất cả",
    summary:
      "Gặp gỡ Pipat — Giám đốc Toastmasters Đông Nam Á: “Hoàn toàn có thể sinh hoạt bằng tiếng Việt! Hệ thống dùng tiếng Anh, hoạt động nội bộ bằng tiếng Việt.” Xóa tan mọi nghi ngờ, mở ra con đường mới.",
  },
  {
    id: "heritage",
    image: "/images/founders/06-heritage.png",
    title: "Di sản Hanoi Toastmasters",
    summary:
      "Câu lạc bộ Toastmasters chính thức đầu tiên dùng tiếng Việt — tiên phong cho hàng chục CLB khác, nhiều hoạt động nội bộ, chứng minh “Làm đúng” thay vì “Làm cho có”. Kiên định + Nghiên cứu + Không bỏ cuộc = Thành công.",
  },
  {
    id: "thanks",
    image: "/images/founders/07-thank-you.png",
    title: "Cảm ơn anh Tường Tuấn & chị Hà Lê Vân",
    summary:
      "Dám nghĩ lớn, hành động quyết liệt, không ngại khó khăn, tạo nền móng cho cộng đồng. Nhờ có anh chị, hôm nay chúng ta có một cộng đồng Toastmasters Việt Nam mạnh mẽ.",
  },
];

export const FOUNDERS = {
  names: "Tường Tuấn & Hà Lê Vân",
  period: "2017–2019",
  formula: "Kiên định + Nghiên cứu + Không bỏ cuộc = Thành công",
};
