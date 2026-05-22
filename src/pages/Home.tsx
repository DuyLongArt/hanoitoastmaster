import { useState } from "react";
import { Link } from "react-router";
import { CLUB } from "../lib/constants";

// Trang chủ — gồm nhiều section, mỗi section là 1 component nhỏ.
// Có 2 pattern chính cần học từ file này:
//   1. Data → UI: viết data ở mảng, dùng .map() ra JSX (CoreValues, WhyChoosePreview).
//   2. State: useState để biết tab nào đang chọn (Activities).
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoreValues />
      <Activities />
      <WhyChoosePreview />
      <AboutToastmasters />
      <CTABanner />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-light via-brand to-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <img
          src="/images/logo_hanoitoastmasters.jpg"
          alt="Hanoi Toastmasters logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hanoi Toastmasters
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
          Where Leaders Are Made — Cùng nhau rèn luyện kỹ năng nói trước công
          chúng và lãnh đạo trong một cộng đồng thân thiện.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/ve-chung-toi"
            className="bg-white text-brand px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Tìm hiểu thêm
          </Link>
          <a
            href={CLUB.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-brand transition"
          >
            Tham gia ngay
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-brand uppercase tracking-wide">
          Về chúng tôi
        </h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          Hanoi Toastmasters là câu lạc bộ thuộc tổ chức Toastmasters
          International, nơi mọi người cùng nhau luyện tập kỹ năng giao tiếp
          và lãnh đạo qua các buổi sinh hoạt thực hành.
        </p>
      </div>
      <div className="mt-10 rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto">
        <img
          src="/images/photos/club-15.jpg"
          alt="Thành viên Hanoi Toastmasters"
          className="w-full"
        />
      </div>
    </section>
  );
}

// 6 giá trị cốt lõi của Toastmasters — pattern data → map.
// Đổi item, thêm/bớt thẻ chỉ cần sửa mảng coreValues bên dưới.
function CoreValues() {
  const coreValues = [
    { icon: "🌍", title: "Quốc gia", description: "Hơn 140 quốc gia" },
    { icon: "👥", title: "Thành viên", description: "Hơn 16.000 CLB" },
    { icon: "🤝", title: "Tôn trọng", description: "Tôn trọng lẫn nhau" },
    { icon: "✨", title: "Chính trực", description: "Trung thực và liêm chính" },
    { icon: "💼", title: "Phục vụ", description: "Cống hiến cho cộng đồng" },
    { icon: "🏆", title: "Uy tín", description: "Giữ vững chất lượng" },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {coreValues.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-xl p-5 text-center hover:shadow-md transition"
            >
              <div className="text-3xl">{v.icon}</div>
              <h3 className="mt-2 font-semibold text-brand text-sm">
                {v.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section "Sinh hoạt định kì" với tabs — đây là chỗ học useState.
// useState trả về 1 mảng [giá trị, hàm set giá trị].
// Khi click tab → gọi setActive(i) → React re-render với tab mới.
function Activities() {
  const tabs = [
    {
      title: "Tổng quan",
      body:
        "Mỗi buổi sinh hoạt định kì kéo dài khoảng 2.5 giờ, gồm các phần: bài nói chuẩn bị, đánh giá, phản ứng nhanh và các vị trí luân phiên.",
    },
    {
      title: "Bài nói chuẩn bị trước",
      body:
        "Thành viên chuẩn bị bài nói theo lộ trình Pathways. Mỗi bài có mục tiêu cụ thể về kỹ năng giao tiếp và lãnh đạo.",
    },
    {
      title: "Đánh giá và phản hồi",
      body:
        "Sau mỗi bài nói, một thành viên khác sẽ đánh giá bằng kỹ thuật \"thịt kẹp\" — khen, góp ý, khen — để giúp người nói tiến bộ.",
    },
    {
      title: "Phản ứng nhanh",
      body:
        "Phần Table Topics — trả lời câu hỏi bất ngờ trong 1–2 phút, rèn khả năng tư duy và phản xạ nói trước đám đông.",
    },
    {
      title: "Các vị trí luân phiên",
      body:
        "Các buổi họp gồm nhiều vai trò khác nhau như người dẫn chương trình, người theo dõi thời gian, người ghi chép. Tham gia các vai trò này giúp phát triển kỹ năng tổ chức, quản lý thời gian và lãnh đạo nhóm.",
    },
  ];

  // useState<number>(0) = "tao có 1 state là số, mặc định = 0"
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-brand uppercase tracking-wide text-center">
        Sinh hoạt định kì tại CLB
      </h2>
      <div className="mt-10 grid md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-sm p-6">
        {/* Cột trái: danh sách tab */}
        <ul className="space-y-2">
          {tabs.map((tab, i) => (
            <li key={tab.title}>
              <button
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-3 rounded-lg transition flex justify-between items-center ${
                  active === i
                    ? "bg-brand text-white"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span>{tab.title}</span>
                {active === i && <span>→</span>}
              </button>
            </li>
          ))}
        </ul>

        {/* Cột phải: nội dung tab đang chọn */}
        <div className="bg-slate-50 rounded-xl p-6 flex items-center">
          <p className="text-slate-700 leading-relaxed">{tabs[active].body}</p>
        </div>
      </div>
    </section>
  );
}

// Preview 3 lý do trên Home, link sang trang /vi-sao xem đầy đủ 7 lý do.
function WhyChoosePreview() {
  const reasons = [
    { title: "Cải thiện kỹ năng giao tiếp", image: "/images/photos/club-01.jpg" },
    { title: "Phát triển kỹ năng lãnh đạo", image: "/images/photos/club-02.jpg" },
    { title: "Tăng cường sự tự tin", image: "/images/photos/club-03.jpg" },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand uppercase tracking-wide">
          Vì sao nên chọn Hanoi Toastmasters
        </h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          Trở thành thành viên Toastmasters mang lại nhiều lợi ích cho phát
          triển bản thân và sự nghiệp.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="font-medium text-slate-700 px-4 py-4">{r.title}</h3>
            </div>
          ))}
        </div>
        <Link
          to="/vi-sao"
          className="inline-block mt-8 text-brand font-medium hover:underline"
        >
          Xem đầy đủ 7 lý do →
        </Link>
      </div>
    </section>
  );
}

function AboutToastmasters() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-brand uppercase tracking-wide">
            Về Toastmasters
          </h2>
          <p className="mt-6 text-slate-700 leading-relaxed">
            Toastmasters International là một tổ chức phi lợi nhuận toàn cầu
            được thành lập vào năm 1924, với hơn 16.000 câu lạc bộ tại hơn 140
            quốc gia. Mục tiêu của tổ chức là giúp các thành viên cải thiện kỹ
            năng giao tiếp và lãnh đạo thông qua các buổi họp mặt và hoạt động
            thực hành. Tại mỗi câu lạc bộ Toastmasters, thành viên có cơ hội
            phát biểu trước đám đông, nhận phản hồi mang tính xây dựng từ các
            thành viên khác, và tham gia vào các vai trò khác nhau trong buổi
            họp để phát triển kỹ năng lãnh đạo.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="/images/photos/pathway.jpg"
            alt="Toastmasters Pathways"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

// Banner CTA cuối trang — nền xanh đậm, có nút đăng ký.
function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="bg-gradient-to-r from-brand-light to-brand rounded-2xl text-white p-10 md:p-14 text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
          Tìm hiểu thêm
        </h2>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">
          Đăng ký tham gia buổi sinh hoạt để trải nghiệm trực tiếp.
        </p>
        <Link
          to="/lien-he"
          className="inline-block mt-6 bg-white text-brand px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Đăng ký tham gia buổi sinh hoạt
        </Link>
      </div>
    </section>
  );
}
