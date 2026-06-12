import { FormEvent, useEffect, useState } from "react";
import { SHEETS } from "../lib/constants";
import { MEMBER_COLUMNS, fetchMembers, type MemberRow } from "../lib/member";

const SESSION_KEY = "memberID";

export default function Member() {
  const [memberIds, setMemberIds] = useState<string[]>([]);
  const [members, setMembers] = useState<MemberRow[]>([]);
  const [memberId, setMemberId] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers(SHEETS.member)
      .then(({ members: rows, memberIds: ids }) => {
        setMembers(rows);
        setMemberIds(ids);
        const stored = sessionStorage.getItem(SESSION_KEY);
        if (stored && ids.includes(stored)) setUnlocked(true);
      })
      .catch(() => setError("Không tải được dữ liệu thành viên."))
      .finally(() => setLoading(false));
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const id = memberId.trim();
    if (memberIds.includes(id)) {
      sessionStorage.setItem(SESSION_KEY, id);
      setUnlocked(true);
      setError("");
    } else {
      setError("Member ID không đúng. Vui lòng thử lại.");
    }
  }

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-600">
        Đang tải dữ liệu...
      </section>
    );
  }

  if (!unlocked) {
    return (
      <section className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-brand uppercase text-center">
          Danh sách thành viên
        </h1>
        <p className="mt-4 text-slate-600 text-center text-sm">
          Nhập Member ID để xem thông tin nội bộ CLB.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            placeholder="Member ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-brand"
            autoComplete="off"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full bg-brand text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Xác nhận
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand uppercase">
        Thông tin thành viên CLB Hanoi Toastmasters
      </h1>
      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-brand text-white">
            <tr>
              {MEMBER_COLUMNS.map((col) => (
                <th key={col.key} className="px-3 py-2 whitespace-nowrap font-medium">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map((row, i) => (
              <tr
                key={row.memberId}
                className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                {MEMBER_COLUMNS.map((col) => (
                  <td key={col.key} className="px-3 py-2 whitespace-nowrap">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
