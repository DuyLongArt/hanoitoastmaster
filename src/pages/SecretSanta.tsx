// TODO (bài tập): port legacy/secret_santa.html sang React.
//
// File gốc làm gì:
// 1. User dán danh sách tên vào <textarea>.
// 2. JS shuffle tên và ghép mỗi người -> người kế tiếp trong vòng.
// 3. Render bảng (người tặng -> người nhận).
// 4. Có nút "Tải CSV".
//
// Cách làm bằng React:
// - useState<string>("") cho textarea.
// - useState<{ giver: string; receiver: string }[]>([]) cho danh sách cặp.
// - Hàm shuffle (Fisher-Yates) — logic y nguyên, không cần jQuery.
// - <textarea value={...} onChange={...} /> (controlled input).
// - Tải CSV qua Blob + URL.createObjectURL — y hệt như cũ.

export default function SecretSanta() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase">
        Secret Santa Circle
      </h1>
      <p className="mt-4 text-slate-600">
        Đang phát triển — port từ <code>legacy/secret_santa.html</code>.
      </p>
    </section>
  );
}
