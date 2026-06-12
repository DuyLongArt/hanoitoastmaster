import { FAQ_ITEMS } from "../lib/faq";

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-brand uppercase tracking-wide">
            Hỏi đáp
          </h1>
          <p className="mt-4 text-slate-600">
            Những câu hỏi thường gặp về CLB Hanoi Toastmasters.
          </p>
        </header>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group bg-white rounded-xl shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-medium text-slate-800 flex justify-between items-center gap-4">
                {item.question}
                <span className="text-brand shrink-0 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="px-5 pb-4 text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
