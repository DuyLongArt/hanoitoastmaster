import { useState } from "react";

type Pair = { giver: string; receiver: string };

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function SecretSanta() {
  const [participants, setParticipants] = useState("");
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [error, setError] = useState("");

  function createCircle() {
    const names = participants
      .split("\n")
      .map((p) => p.trim())
      .filter(Boolean);

    if (names.length < 2) {
      setError("Cần ít nhất 2 người tham gia để tạo vòng tròn.");
      setPairs([]);
      return;
    }

    setError("");
    const shuffled = shuffle(names);
    setPairs(
      shuffled.map((giver, i) => ({
        giver,
        receiver: shuffled[(i + 1) % shuffled.length],
      })),
    );
  }

  function downloadCsv() {
    const header = "Santa,Baby\n";
    const rows = pairs.map((p) => `"${p.giver}","${p.receiver}"`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "secret_santa_circle.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase text-center">
        Secret Santa Circle
      </h1>
      <p className="mt-4 text-slate-600 text-center">
        Nhập danh sách người tham gia (mỗi tên một dòng):
      </p>

      <textarea
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
        rows={8}
        className="mt-6 w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brand resize-y"
      />

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={createCircle}
          className="bg-brand text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
        >
          Tạo vòng tròn
        </button>
        {pairs.length > 0 && (
          <button
            type="button"
            onClick={downloadCsv}
            className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
          >
            Tải về CSV
          </button>
        )}
      </div>

      {pairs.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Santa</th>
                <th className="px-4 py-3 text-left font-semibold">Baby</th>
              </tr>
            </thead>
            <tbody>
              {pairs.map((pair) => (
                <tr key={pair.giver} className="border-t border-slate-100">
                  <td className="px-4 py-3">{pair.giver}</td>
                  <td className="px-4 py-3">{pair.receiver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
