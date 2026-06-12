import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import SHDK from "./pages/SHDK";
import Member from "./pages/Member";
import SecretSanta from "./pages/SecretSanta";
import NotFound from "./pages/NotFound";

// Bảng routes — mỗi <Route> map 1 URL với 1 component.
// Các route con đều chia sẻ <Layout> (có header + footer).
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ve-chung-toi" element={<About />} />
        <Route path="/vi-sao" element={<WhyUs />} />
        <Route path="/hoi-dap" element={<FAQ />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/shdk" element={<SHDK />} />
        <Route path="/member" element={<Member />} />
        <Route path="/secret-santa" element={<SecretSanta />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
