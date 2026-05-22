// Helper for fetching published Google Sheets HTML.
//
// The legacy site published sheets via "File → Share → Publish to web"
// and parsed the resulting HTML with DOMParser. We keep the same idea
// but isolate it here so pages can re-use it.

export async function fetchPublishedSheet(url: string): Promise<Document> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const html = await res.text();
  return new DOMParser().parseFromString(html, "text/html");
}

// Read a row from the published sheet table as an array of cell text.
export function readRow(doc: Document, rowIndex: number): string[] {
  const rows = doc.querySelectorAll("tbody tr");
  const cells = rows[rowIndex]?.querySelectorAll("td") ?? [];
  return Array.from(cells, (cell) => cell.textContent?.trim() ?? "");
}
