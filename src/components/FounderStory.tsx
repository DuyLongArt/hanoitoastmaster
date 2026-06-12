import { AnimateIn } from "./AnimateIn";
import { FOUNDER_CHAPTERS, FOUNDERS } from "../lib/founderStory";

export function FounderStory() {
  return (
    <section id="cau-chuyen-sang-lap" className="bg-brand-dark text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-12">
          <p className="text-brand-light text-sm font-medium uppercase tracking-widest">
            Hanoi Toastmasters
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Câu chuyện sáng lập
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Chia sẻ hành trình của {FOUNDERS.names} — những người tiên phong
            mang Toastmasters chính thức bằng tiếng Việt đến Hà Nội (
            {FOUNDERS.period}).
          </p>
        </header>

        <div className="space-y-10">
          {FOUNDER_CHAPTERS.map((chapter, i) => (
            <AnimateIn key={chapter.id} animation="fade-in-up" delay={i * 60}>
              <article className="rounded-2xl overflow-hidden shadow-xl bg-brand/40 ring-1 ring-white/10">
                <img
                  src={chapter.image}
                  alt={chapter.title}
                  width={1024}
                  height={1024}
                  className="w-full h-auto"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
                <div className="px-5 py-4 md:px-6 md:py-5 border-t border-white/10">
                  <h3 className="font-semibold text-lg text-white">
                    {chapter.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    {chapter.summary}
                  </p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={100}>
          <p className="mt-12 text-center text-white/90 font-medium text-lg px-4 py-4 rounded-xl bg-white/10 ring-1 ring-white/15">
            {FOUNDERS.formula}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
