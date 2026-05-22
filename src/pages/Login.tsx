// TODO: trang Đăng nhập.
// Gợi ý: form 2 ô (email + password), useState cho mỗi ô,
// onSubmit gọi API hoặc Supabase Auth (nếu bạn muốn học sau).

export default function Login() {
  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase text-center">
        Đăng nhập
      </h1>
      <form className="mt-8 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-brand"
          disabled
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-brand"
          disabled
        />
        <button
          type="submit"
          disabled
          className="w-full bg-brand text-white py-2 rounded-lg opacity-50 cursor-not-allowed"
        >
          Đăng nhập (chưa hoạt động)
        </button>
      </form>
    </section>
  );
}
