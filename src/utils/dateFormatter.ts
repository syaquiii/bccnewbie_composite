// src/utils/dateFormatter.ts
export const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);

  // Format tanggal: 2025-04-26
  const formattedDate = date
    .toLocaleDateString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");

  // Format waktu: 18:02:04
  const formattedTime = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",

    hour12: false,
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
};
