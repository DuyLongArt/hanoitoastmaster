import { fetchPublishedSheet, readRow } from "./sheets";

export type ShdkMeeting = {
  shdk: string;
  time: string;
  subject: string;
  tod: string;
  speaker1: string;
  eva1: string;
  speaker2: string;
  eva2: string;
  speaker3: string;
  eva3: string;
  speaker4: string;
  eva4: string;
  ge: string;
  timer: string;
  ahcounter: string;
  grammarian: string;
  topicmaster: string;
  evatopicmaster: string;
  gamer: string;
};

export type ShdkForm = ShdkMeeting & {
  project1: string;
  speakname1: string;
  project2: string;
  speakname2: string;
  project3: string;
  speakname3: string;
  project4: string;
  speakname4: string;
};

const MONTHS: Record<string, string> = {
  jan: "01",
  feb: "02",
  mar: "03",
  apr: "04",
  may: "05",
  jun: "06",
  jul: "07",
  aug: "08",
  sep: "09",
  oct: "10",
  nov: "11",
  dec: "12",
};

export function formatShdkDate(dateString: string): string | null {
  if (!dateString) return null;
  const [day, month, year] = dateString.split("-");
  if (!day || !month || !year) return null;
  const monthNumber = MONTHS[month.toLowerCase()];
  if (!monthNumber) return null;
  return `${day.padStart(2, "0")}/${monthNumber}/${year}`;
}

export function parseShdkDate(dateString: string): Date | null {
  if (!dateString) return null;
  const [day, month, year] = dateString.split("-");
  if (!day || !month || !year) return null;
  const monthNumber = MONTHS[month.toLowerCase()];
  if (!monthNumber) return null;
  return new Date(`${year}-${monthNumber}-${day.padStart(2, "0")}`);
}

export function findClosestShdk(meetings: ShdkMeeting[]): ShdkMeeting | null {
  if (meetings.length === 0) return null;
  const now = Date.now();
  let closest: ShdkMeeting | null = null;
  let closestDiff = Infinity;

  for (const meeting of meetings) {
    const date = parseShdkDate(meeting.time);
    if (!date) continue;
    const diff = Math.abs(now - date.getTime());
    if (diff < closestDiff) {
      closestDiff = diff;
      closest = meeting;
    }
  }

  return closest ?? meetings[0];
}

function rowToMeetings(doc: Document): ShdkMeeting[] {
  const values = readRow(doc, 1);
  return values.slice(1).map((_, index) => ({
    shdk: readRow(doc, 1)[index + 1] ?? "",
    time: readRow(doc, 2)[index + 1] ?? "",
    subject: readRow(doc, 3)[index + 1] ?? "",
    tod: readRow(doc, 6)[index + 1] ?? "",
    speaker1: readRow(doc, 7)[index + 1] ?? "",
    eva1: readRow(doc, 8)[index + 1] ?? "",
    speaker2: readRow(doc, 9)[index + 1] ?? "",
    eva2: readRow(doc, 10)[index + 1] ?? "",
    speaker3: readRow(doc, 11)[index + 1] ?? "",
    eva3: readRow(doc, 12)[index + 1] ?? "",
    speaker4: readRow(doc, 13)[index + 1] ?? "",
    eva4: readRow(doc, 14)[index + 1] ?? "",
    ge: readRow(doc, 19)[index + 1] ?? "",
    timer: readRow(doc, 20)[index + 1] ?? "",
    ahcounter: readRow(doc, 21)[index + 1] ?? "",
    grammarian: readRow(doc, 22)[index + 1] ?? "",
    topicmaster: readRow(doc, 23)[index + 1] ?? "",
    evatopicmaster: readRow(doc, 25)[index + 1] ?? "",
    gamer: readRow(doc, 26)[index + 1] ?? "",
  }));
}

export async function fetchAllShdk(url: string): Promise<ShdkMeeting[]> {
  const doc = await fetchPublishedSheet(url);
  return rowToMeetings(doc).filter((m) => m.shdk.trim() !== "");
}

export function meetingToForm(meeting: ShdkMeeting): ShdkForm {
  return {
    ...meeting,
    project1: "",
    speakname1: "",
    project2: "",
    speakname2: "",
    project3: "",
    speakname3: "",
    project4: "",
    speakname4: "",
  };
}

export function loadFormOverrides(base: ShdkForm): ShdkForm {
  const keys = Object.keys(base) as (keyof ShdkForm)[];
  const next = { ...base };
  for (const key of keys) {
    const saved = localStorage.getItem(String(key));
    if (saved && !next[key]) next[key] = saved;
  }
  return next;
}

export function saveFormField(key: keyof ShdkForm, value: string) {
  localStorage.setItem(String(key), value);
}
