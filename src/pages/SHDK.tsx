// TODO (bài tập): port legacy/shdk.html + legacy/shdk.js sang React.
//
// File gốc làm gì:
// 1. Fetch HTML từ Google Sheet đã publish:
//      https://docs.google.com/spreadsheets/d/e/2PACX-1vTmuybrFhvKypGiMaQBcIXBTisBu2TFOtUP3g5cVmjdGQOV_p9pp7sBD_GwM5zCNTYA2Dt6Zgr3PRFO/pubhtml
// 2. Parse mỗi cột thành 1 kịch bản sinh hoạt (thời gian, người nói, người đánh giá…)
// 3. Tìm SHDK gần với hôm nay nhất, hiển thị thành bảng in được.
//
// Cách làm bằng React:
// - useEffect fetch khi mount, lưu vào useState.
// - Định nghĩa type Meeting để TS check giúp.
// - Render bằng <table> + class Tailwind.
// - Helper sẵn có: import { fetchPublishedSheet, readRow } from "../lib/sheets";

export default function SHDK() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase">
        Kịch bản sinh hoạt định kỳ
      </h1>
      <p className="mt-4 text-slate-600">
        Đang phát triển — port từ <code>legacy/shdk.html</code>.
      </p>
    </section>
  );
}
