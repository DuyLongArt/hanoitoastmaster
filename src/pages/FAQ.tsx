// TODO: trang Hỏi đáp.
// Gợi ý React concepts để học:
// - useState<number | null>(null) để biết câu hỏi nào đang mở.
// - Mỗi câu hỏi click vào sẽ toggle phần trả lời (accordion).
// - Dùng <details><summary> thuần HTML cũng được, không cần state.

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase">Hỏi đáp</h1>
      <p className="mt-4 text-slate-600">
        Những câu hỏi thường gặp về CLB sẽ liệt kê tại đây.
      </p>
    </section>
  );
}
