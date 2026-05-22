// TODO (bài tập của bạn): viết nội dung trang "Về chúng tôi".
// Tham khảo nội dung trong legacy/index.html, tìm phần About / VỀ CHÚNG TÔI.
//
// Gợi ý cấu trúc: 1 banner tiêu đề, 1 đoạn mô tả CLB, 1 grid ảnh thành viên / hoạt động.

export default function About() {
  return (
    <PagePlaceholder
      title="Về chúng tôi"
      description="Giới thiệu về CLB Hanoi Toastmasters."
    />
  );
}

// Component tạm dùng chung cho các trang stub. Bạn xoá đi khi viết nội dung thật.
function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase">{title}</h1>
      <p className="mt-4 text-slate-600">{description}</p>
      <p className="mt-6 text-sm text-slate-400 italic">
        Trang này chưa có nội dung — hãy xem comment ở đầu file để biết cần làm
        gì.
      </p>
    </section>
  );
}
