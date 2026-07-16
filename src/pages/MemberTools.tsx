import { Link } from "react-router";

const tools = [
  {
    title: "Kịch bản sinh hoạt",
    description:
      "Soạn, chỉnh sửa và in kịch bản buổi sinh hoạt định kỳ. Thêm/xóa người nói, đồng bộ từ Google Sheet.",
    href: "/kich-ban/index.html",
    external: true,
  },
  {
    title: "Danh sách thành viên",
    description: "Tra cứu thông tin thành viên CLB (yêu cầu Member ID).",
    href: "/member",
    external: false,
  },
  {
    title: "Secret Santa",
    description: "Tạo vòng tròn Secret Santa và tải file CSV.",
    href: "/secret-santa",
    external: false,
  },
];

export default function MemberTools() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-brand uppercase tracking-wide">
          Công cụ hỗ trợ thành viên
        </h1>
        <p className="mt-4 text-slate-600">
          Các công cụ nội bộ dành cho thành viên và ban điều hành CLB.
        </p>
      </header>

      <div className="mt-10 grid gap-4">
        {tools.map((tool) =>
          tool.external ? (
            <a
              key={tool.title}
              href={tool.href}
              className="block bg-white rounded-xl border border-slate-200 p-6 hover-lift hover:border-brand/30 transition"
            >
              <h2 className="font-semibold text-brand text-lg">{tool.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{tool.description}</p>
              <span className="inline-block mt-3 text-sm text-brand font-medium">
                Mở công cụ →
              </span>
            </a>
          ) : (
            <Link
              key={tool.title}
              to={tool.href}
              className="block bg-white rounded-xl border border-slate-200 p-6 hover-lift hover:border-brand/30 transition"
            >
              <h2 className="font-semibold text-brand text-lg">{tool.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{tool.description}</p>
              <span className="inline-block mt-3 text-sm text-brand font-medium">
                Mở công cụ →
              </span>
            </Link>
          ),
        )}
      </div>
    </section>
  );
}
