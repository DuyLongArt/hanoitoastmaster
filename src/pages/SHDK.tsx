import { useEffect, useState } from "react";
import { CLUB, SHEETS } from "../lib/constants";
import {
  fetchAllShdk,
  findClosestShdk,
  formatShdkDate,
  loadFormOverrides,
  meetingToForm,
  saveFormField,
  type ShdkForm,
  type ShdkMeeting,
} from "../lib/shdk";

const FORM_FIELDS: {
  key: keyof ShdkForm;
  label: string;
  multiline?: boolean;
}[] = [
  { key: "subject", label: "Chủ đề" },
  { key: "tod", label: "Toastmaster of the Day (ToD)" },
  { key: "gamer", label: "Quản trò" },
  { key: "timer", label: "Timer" },
  { key: "ahcounter", label: "Ah Counter" },
  { key: "grammarian", label: "Grammarian" },
  { key: "topicmaster", label: "Topicmaster" },
  { key: "evatopicmaster", label: "Đánh giá phản ứng nhanh" },
  { key: "ge", label: "General Evaluator (GE)" },
  { key: "speaker1", label: "Người nói 1" },
  { key: "eva1", label: "Người đánh giá 1" },
  { key: "project1", label: "Dự án 1", multiline: true },
  { key: "speakname1", label: "Tên bài nói 1", multiline: true },
  { key: "speaker2", label: "Người nói 2" },
  { key: "eva2", label: "Người đánh giá 2" },
  { key: "project2", label: "Dự án 2", multiline: true },
  { key: "speakname2", label: "Tên bài nói 2", multiline: true },
  { key: "speaker3", label: "Người nói 3" },
  { key: "eva3", label: "Người đánh giá 3" },
  { key: "project3", label: "Dự án 3", multiline: true },
  { key: "speakname3", label: "Tên bài nói 3", multiline: true },
  { key: "speaker4", label: "Người nói 4" },
  { key: "eva4", label: "Người đánh giá 4" },
  { key: "project4", label: "Dự án 4", multiline: true },
  { key: "speakname4", label: "Tên bài nói 4", multiline: true },
];

function applyMeeting(meeting: ShdkMeeting): ShdkForm {
  return loadFormOverrides(meetingToForm(meeting));
}

export default function SHDK() {
  const [meetings, setMeetings] = useState<ShdkMeeting[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [form, setForm] = useState<ShdkForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllShdk(SHEETS.shdk)
      .then((rows) => {
        setMeetings(rows);
        const closest = findClosestShdk(rows);
        const idx = closest ? rows.indexOf(closest) : 0;
        setSelectedIndex(idx);
        if (rows[idx]) {
          setForm(applyMeeting(rows[idx]));
        }
      })
      .catch(() => setError("Không tải được kịch bản sinh hoạt."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const meeting = meetings[selectedIndex];
    if (meeting) setForm(applyMeeting(meeting));
  }, [selectedIndex, meetings]);

  function updateField(key: keyof ShdkForm, value: string) {
    setForm((prev) => {
      if (!prev) return prev;
      const next = { ...prev, [key]: value };
      saveFormField(key, value);
      return next;
    });
  }

  function refreshFromSheet() {
    const meeting = meetings[selectedIndex];
    if (meeting) setForm(applyMeeting(meeting));
  }

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-600">
        Đang tải kịch bản...
      </section>
    );
  }

  if (error || !form) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 text-center text-red-600">
        {error || "Không có dữ liệu sinh hoạt."}
      </section>
    );
  }

  const shdkLabel = form.shdk.replace(/^SHDK\s*/i, "");

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid xl:grid-cols-[1fr_360px] gap-8">
        <div id="print-area" className="bg-white rounded-xl border border-slate-200 p-4 print:border-0 print:p-0">
          <header className="text-center text-brand mb-4">
            <h1 className="text-lg font-bold uppercase leading-snug">
              Kịch bản chương trình
              <br />
              Sinh hoạt định kỳ {shdkLabel}
              <br />
              <span className="text-base">{form.subject}</span>
            </h1>
          </header>

          <div className="mb-4 p-3 border border-slate-200 rounded-lg text-xs text-slate-700">
            <ClubInfo />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[10px] border border-black border-collapse">
              <thead>
                <tr className="font-bold bg-slate-50">
                  <th className="border border-black p-1 w-[15%]">Thời gian</th>
                  <th className="border border-black p-1 w-[55%]">Nội dung</th>
                  <th className="border border-black p-1 w-[30%]">Phụ trách</th>
                </tr>
              </thead>
              <tbody>
                <AgendaRow
                  time="18:55 - 19:05 (10')"
                  content="Trò chơi khởi động"
                  pic={form.gamer}
                />
                <AgendaRow
                  time="19:05 - 19:10 (10')"
                  content="Phát biểu mở đầu · Giới thiệu ToD và các vị trí luân phiên"
                  pic={form.tod}
                />
                <AgendaRow
                  time="19:10 - 20:00 (35')"
                  content={
                    <>
                      Thuyết trình chuẩn bị trước
                      <br />1. {form.speaker1} — {form.speakname1 || form.project1}
                      <br />2. {form.speaker2} — {form.speakname2 || form.project2}
                      <br />3. {form.speaker3} — {form.speakname3 || form.project3}
                      <br />4. {form.speaker4} — {form.speakname4 || form.project4}
                    </>
                  }
                  pic={`ToD: ${form.tod}`}
                />
                <AgendaRow time="20:00 - 20:10 (10')" content="Teabreak" pic="" />
                <AgendaRow
                  time="20:10 - 20:45 (35')"
                  content="Đánh giá phần thuyết trình · Timer / Ah / Grammarian"
                  pic={`GE: ${form.ge}`}
                />
                <AgendaRow
                  time="20:50 - 21:18 (28')"
                  content={`Phản ứng nhanh · Topicmaster: ${form.topicmaster}`}
                  pic={`ĐG PƯN: ${form.evatopicmaster}`}
                />
                <AgendaRow
                  time="21:18 - 21:40 (22')"
                  content="GE tổng quan · VPM giao lưu · Tổng kết & chụp ảnh"
                  pic={`GE: ${form.ge}`}
                />
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-slate-500 print:hidden">
            Ban đánh giá: Timer {form.timer} · Ah {form.ahcounter} · Grammarian{" "}
            {form.grammarian} · S1-E1 {form.speaker1}-{form.eva1} · S2-E2{" "}
            {form.speaker2}-{form.eva2} · S3-E3 {form.speaker3}-{form.eva3} ·
            S4-E4 {form.speaker4}-{form.eva4}
          </p>
        </div>

        <aside className="print:hidden">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm sticky top-4">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
              <h2 className="font-semibold text-brand">Sinh hoạt định kì</h2>
              <button
                type="button"
                onClick={refreshFromSheet}
                className="text-sm text-brand hover:underline"
              >
                Làm mới
              </button>
            </div>

            <div className="p-4 space-y-3 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <label className="block">
                <span className="text-sm font-medium">Sinh hoạt định kì số</span>
                <select
                  value={selectedIndex}
                  onChange={(e) => setSelectedIndex(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-brand"
                >
                  {meetings.map((m, i) => (
                    <option key={m.shdk + m.time} value={i}>
                      {m.shdk}: {formatShdkDate(m.time) ?? m.time}
                    </option>
                  ))}
                </select>
              </label>

              {FORM_FIELDS.map(({ key, label, multiline }) => (
                <label key={key} className="block">
                  <span className="text-sm font-medium">{label}</span>
                  {multiline ? (
                    <textarea
                      rows={2}
                      value={form[key]}
                      onChange={(e) => updateField(key, e.target.value)}
                      className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-brand resize-y"
                    />
                  ) : (
                    <input
                      type="text"
                      value={form[key]}
                      onChange={(e) => updateField(key, e.target.value)}
                      className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-brand"
                    />
                  )}
                </label>
              ))}

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full bg-brand text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
              >
                In kịch bản
              </button>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #print-area, #print-area * { visibility: visible; }
          #print-area { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </section>
  );
}

function ClubInfo() {
  return (
    <div className="p-1">
      <div className="flex items-center gap-1 mb-2">
        <img src="/images/logo_toastmasters.png" alt="" className="h-8 w-8" />
        <img
          src="/images/logo_hanoitoastmasters.jpg"
          alt=""
          className="h-8 w-8 rounded"
        />
      </div>
      <strong>Hanoi Toastmasters</strong>
      <br />
      {CLUB.schedule}
      <br />
      {CLUB.address}
    </div>
  );
}

function AgendaRow({
  time,
  content,
  pic,
}: {
  time: string;
  content: React.ReactNode;
  pic: string;
}) {
  return (
    <tr>
      <td className="border border-black p-1 align-top">{time}</td>
      <td className="border border-black p-1 align-top">{content}</td>
      <td className="border border-black p-1 align-top">{pic}</td>
    </tr>
  );
}
