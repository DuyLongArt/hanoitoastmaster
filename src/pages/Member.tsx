// TODO (bài tập): port legacy/member.html sang React.
//
// File gốc làm gì:
// 1. Hỏi user nhập Member ID (cổng mật khẩu).
// 2. Fetch Google Sheet chứa thông tin thành viên.
// 3. Chỉ hiện bảng khi nhập đúng ID.
//
// Cách làm bằng React:
// - 2 state: `memberId` (giá trị input) và `data` (rows khi unlock).
// - Form onSubmit -> check ID, fetch, set data.
// - Conditional render: form khi chưa có data, table khi có data.
// - Helper: import { fetchPublishedSheet } from "../lib/sheets";

export default function Member() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase">
        Danh sách thành viên
      </h1>
      <p className="mt-4 text-slate-600">
        Đang phát triển — port từ <code>legacy/member.html</code>.
      </p>
    </section>
  );
}
