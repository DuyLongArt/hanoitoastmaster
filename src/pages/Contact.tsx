import { FormEvent, useState } from "react";
import { CLUB } from "../lib/constants";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Họ và tên: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");
    const mailto = `mailto:?subject=${encodeURIComponent(`[Hanoi Toastmasters] ${form.subject}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase text-center">
        Liên hệ với chúng tôi
      </h1>

      <div className="mt-10 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="space-y-3 text-slate-700">
            <p>
              <strong className="text-brand">Địa chỉ:</strong> {CLUB.address}
            </p>
            <p>
              <strong className="text-brand">Thời gian:</strong> {CLUB.schedule}
            </p>
            <p>
              <strong className="text-brand">Hotline:</strong> {CLUB.phone} —{" "}
              {CLUB.contactPerson}
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm aspect-video">
            <iframe
              src={CLUB.mapsEmbed}
              title="Bản đồ Hanoi Toastmasters"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <a
            href={CLUB.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-brand font-medium hover:underline"
          >
            Nhắn tin qua Fanpage Facebook →
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 rounded-xl p-6 space-y-4"
        >
          <h2 className="font-semibold text-slate-800">Gửi câu hỏi / liên hệ</h2>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Họ và tên</span>
            <input
              type="text"
              required
              maxLength={50}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-brand bg-white"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              required
              maxLength={50}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-brand bg-white"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Tiêu đề</span>
            <input
              type="text"
              required
              maxLength={50}
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-brand bg-white"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Nội dung</span>
            <textarea
              required
              maxLength={500}
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-brand bg-white resize-y"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-brand text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
          >
            Gửi qua email
          </button>

          {sent && (
            <p className="text-sm text-green-700">
              Ứng dụng email của bạn sẽ mở để gửi tin nhắn.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
