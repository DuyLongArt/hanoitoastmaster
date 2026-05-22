import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-brand">404</h1>
      <p className="mt-4 text-slate-600">Không tìm thấy trang.</p>
      <Link to="/" className="mt-6 inline-block text-brand underline">
        Về trang chủ
      </Link>
    </div>
  );
}
