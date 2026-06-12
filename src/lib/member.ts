import { fetchPublishedSheet } from "./sheets";

export type MemberRow = {
  stt: string;
  memberId: string;
  memberSince: string;
  fullName: string;
  role: string;
  birthday: string;
  phone: string;
  email: string;
  hanoiAddress: string;
  pathway: string;
  workplace: string;
  jobField: string;
  registeredAddress: string;
};

export const MEMBER_COLUMNS: { key: keyof MemberRow; label: string }[] = [
  { key: "stt", label: "STT" },
  { key: "memberId", label: "Mã thành viên" },
  { key: "memberSince", label: "Thành viên từ" },
  { key: "fullName", label: "Họ tên đầy đủ" },
  { key: "role", label: "Chức năng" },
  { key: "birthday", label: "Ngày sinh" },
  { key: "phone", label: "SĐT" },
  { key: "email", label: "Email" },
  { key: "hanoiAddress", label: "Địa chỉ thường trú ở Hà Nội" },
  { key: "pathway", label: "Con đường/Pathway" },
  { key: "workplace", label: "Nơi làm việc" },
  { key: "jobField", label: "Vị trí, lĩnh vực công việc" },
  { key: "registeredAddress", label: "Địa chỉ theo hộ khẩu/CMT" },
];

export async function fetchMembers(url: string): Promise<{
  members: MemberRow[];
  memberIds: string[];
}> {
  const doc = await fetchPublishedSheet(url);
  const rows = doc.querySelectorAll("tbody tr");
  const members: MemberRow[] = [];
  const memberIds: string[] = [];

  for (let i = 2; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll("td");
    if (!cells[0]?.textContent?.trim()) break;

    const memberId = cells[1]?.textContent?.trim() ?? "";
    memberIds.push(memberId);

    members.push({
      stt: cells[0]?.textContent?.trim() ?? "",
      memberId,
      memberSince: cells[2]?.textContent?.trim() ?? "",
      fullName: cells[3]?.textContent?.trim() ?? "",
      role: cells[5]?.textContent?.trim() ?? "",
      birthday: cells[6]?.textContent?.trim() ?? "",
      phone: cells[7]?.textContent?.trim() ?? "",
      email: cells[8]?.textContent?.trim() ?? "",
      hanoiAddress: cells[9]?.textContent?.trim() ?? "",
      pathway: cells[10]?.textContent?.trim() ?? "",
      workplace: cells[11]?.textContent?.trim() ?? "",
      jobField: cells[12]?.textContent?.trim() ?? "",
      registeredAddress: cells[13]?.textContent?.trim() ?? "",
    });
  }

  return { members, memberIds };
}
