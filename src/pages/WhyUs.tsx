// Trang "Vì sao nên chọn Hanoi Toastmasters" — 7 lý do với ảnh thật từ CLB.
// Pattern: mảng data → .map() ra <ReasonCard/>.
// Đổi ảnh: chỉ cần thay path trong field `image`.

type Reason = {
  image: string;
  title: string;
};

const reasons: Reason[] = [
  { image: "/images/photos/club-01.jpg", title: "Cải thiện kỹ năng giao tiếp" },
  { image: "/images/photos/club-02.jpg", title: "Phát triển kỹ năng lãnh đạo" },
  { image: "/images/photos/club-03.jpg", title: "Tăng cường sự tự tin" },
  { image: "/images/photos/club-04.jpg", title: "Cải thiện kỹ năng lắng nghe" },
  { image: "/images/photos/club-05.jpg", title: "Kết nối và xây dựng mối quan hệ" },
  { image: "/images/photos/club-06.jpg", title: "Nhận phản hồi mang tính xây dựng" },
  { image: "/images/photos/club-07.jpg", title: "Phát triển tư duy sáng tạo" },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-brand uppercase tracking-wide">
            Vì sao nên chọn Hanoi Toastmasters
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Trở thành thành viên của Toastmasters mang lại nhiều lợi ích quan
            trọng trong việc phát triển bản thân và sự nghiệp. Dưới đây là bảy
            lợi ích tiêu biểu:
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <ReasonCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ image, title }: Reason) {
  return (
    <article className="bg-white rounded-xl overflow-hidden hover:shadow-md transition">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>
      <h3 className="font-medium text-slate-700 text-center text-sm px-4 py-4">
        {title}
      </h3>
    </article>
  );
}
