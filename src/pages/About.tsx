import { AnimateIn } from "../components/AnimateIn";
import { FounderStory } from "../components/FounderStory";
import { CLUB } from "../lib/constants";

const highlights = [
  {
    title: "Sinh hoạt định kì",
    image: "/images/photos/shdk_156.jpg",
    description:
      "Các buổi họp định kỳ nơi thành viên tham gia bài phát biểu, phát triển kỹ năng và nhận phản hồi mang tính xây dựng.",
  },
  {
    title: "Giáo trình Pathways",
    image: "/images/photos/pathway.jpg",
    description:
      "Chương trình giáo dục cốt lõi với 11 lộ trình, mỗi lộ trình tập trung vào một bộ kỹ năng như thuyết trình và lãnh đạo.",
  },
  {
    title: "Đào tạo nội bộ",
    image: "/images/photos/club-14.jpg",
    description:
      "Các buổi đào tạo chuyên sâu về kỹ thuật thuyết trình, quản lý thời gian và xây dựng bài nói hiệu quả.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-brand uppercase tracking-wide">
              Về chúng tôi
            </h1>
          </header>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <AnimateIn animation="slide-in-left">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/photos/shdk_156.jpg"
                  alt="Buổi sinh hoạt Hanoi Toastmasters"
                  className="w-full object-cover"
                />
              </div>
            </AnimateIn>
            <AnimateIn animation="slide-in-right" delay={120}>
              <p className="text-slate-700 leading-relaxed">
                Hanoi Toastmasters là câu lạc bộ Toastmasters đầu tiên tại Việt
                Nam hoạt động bằng tiếng Việt, nhằm mục đích giúp người Việt Nam
                rèn luyện kỹ năng giao tiếp và lãnh đạo. Với mục tiêu tạo ra một
                môi trường học hỏi thân thiện và hiệu quả, câu lạc bộ cung cấp cơ
                hội để các thành viên phát triển khả năng nói trước công chúng,
                lắng nghe tích cực và dẫn dắt nhóm.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                CLB thuộc Toastmasters International — tổ chức phi lợi nhuận toàn
                cầu với hơn 16.000 câu lạc bộ tại hơn 140 quốc gia, với sứ mệnh
                giúp mọi người trở thành những nhà giao tiếp và lãnh đạo tự tin.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <FounderStory />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-brand uppercase text-center tracking-wide">
          Các hoạt động nổi bật
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <AnimateIn key={item.title} animation="fade-in-up" delay={i * 100}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-light to-brand text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            Tham gia cùng chúng tôi
          </h2>
          <p className="mt-3 opacity-90">
            {CLUB.schedule} · {CLUB.address}
          </p>
          <a
            href={CLUB.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-white text-brand px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Liên hệ qua Facebook
          </a>
        </div>
      </section>
    </>
  );
}
