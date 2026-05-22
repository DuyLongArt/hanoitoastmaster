import { CLUB } from "../lib/constants";

// TODO cho anh: thêm form gửi tin nhắn (Họ tên, Email, Nội dung, nút Xác nhận).
// Cần học:
//   - useState cho mỗi field (controlled input).
//   - onSubmit handler — preventDefault rồi gọi API/email.
//   - Có thể dùng Formspree, Getform, hoặc Supabase để nhận message.

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase text-center">
        Liên hệ với chúng tôi
      </h1>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="space-y-3 text-slate-700">
          <p>
            <strong className="text-brand">Địa chỉ:</strong> {CLUB.address}
          </p>
          <p>
            <strong className="text-brand">Thời gian:</strong> {CLUB.schedule}
          </p>
          <p>
            <strong className="text-brand">Hotline:</strong> {CLUB.phone} -{" "}
            {CLUB.contactPerson}
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl p-6">
          <p className="text-sm text-slate-500 italic">
            Form gửi tin nhắn — TODO: anh tự làm để học controlled input.
          </p>
        </div>
      </div>
    </section>
  );
}
