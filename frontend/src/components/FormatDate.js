export function FormatDate(isoString) {
  const date = new Date(isoString);
  return date
    .toLocaleString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24-hour format
      timeZone: "America/Toronto", // Timezone for Eastern Time (EST)
    })
    .replace(",", "")
    .replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1"); // Reformats to YYYY-MM-DD
}
