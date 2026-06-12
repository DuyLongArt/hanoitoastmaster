import { NavLink, Outlet } from "react-router";
import { CLUB } from "../lib/constants";

// Layout = khung chung cho mọi trang: TopBar (liên hệ + social) ở trên cùng,
// Header (logo + nav) ở giữa, rồi nội dung của route con (<Outlet/>) ở dưới.
// React Router sẽ render trang con vào chỗ <Outlet/>.
export default function Layout() {
  return (
    <div className="min-h-full flex flex-col bg-white text-slate-900">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Thanh trên cùng: số điện thoại + icon mạng xã hội.
// Data của socials lấy từ constants để Footer cũng dùng được — DRY pattern.
const socials = [
  { href: CLUB.facebook, icon: "/images/facebook.svg", label: "Facebook" },
  { href: CLUB.youtube, icon: "/images/youtube.svg", label: "YouTube" },
  { href: CLUB.tiktok, icon: "/images/tiktok.svg", label: "TikTok" },
];

function TopBar() {
  return (
    <div className="bg-gradient-to-r from-brand-light via-brand to-brand-dark text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <p>
          <span className="opacity-80">Liên hệ với chúng tôi:</span>{" "}
          <span className="font-medium">
            {CLUB.phone} - {CLUB.contactPerson}
          </span>
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:opacity-75 transition"
            >
              <img src={s.icon} alt={s.label} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Header chính: 2 logo + menu điều hướng.
function Header() {
  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/ve-chung-toi", label: "Về chúng tôi" },
    { to: "/vi-sao", label: "Vì sao nên chọn chúng tôi?" },
    { to: "/hoi-dap", label: "Hỏi đáp" },
    { to: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <header className="bg-gradient-to-r from-brand-light via-brand to-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/logo_toastmasters.png"
            alt="Toastmasters International"
            className="h-12 w-12 object-contain"
          />
          <img
            src="/images/logo_hanoitoastmasters.jpg"
            alt="Hanoi Toastmasters"
            className="h-12 w-12 object-contain rounded"
          />
        </NavLink>
        <nav className="hidden md:flex items-center gap-1 ml-auto text-sm font-medium uppercase tracking-wide">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded transition ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

// Footer layout giống ảnh: logo + địa chỉ + giờ + social. Layout 3 cột.
function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo_hanoitoastmasters.jpg"
              alt="Hanoi Toastmasters"
              className="h-12 w-12 rounded"
            />
            <p>{CLUB.address}</p>
          </div>
          <p className="md:text-center">{CLUB.schedule}</p>
          <div className="md:text-right flex items-center md:justify-end gap-3">
            <span>Kết nối với chúng tôi:</span>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="hover:opacity-75 transition"
                >
                  <img src={s.icon} alt={s.label} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs opacity-70">
          Copyright © {new Date().getFullYear()} Hanoi Toastmasters Corporation
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
