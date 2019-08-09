export const reportService = {
  loadReports
};

async function loadReports() {
  let res = await fetch("http://localhost:4000/api/reports");
  let reports = await res.text();

  return JSON.parse(reports, (key, value) => {
    if (key === "startTime" || key === "endTime") {
      return new Date(value);
    }
    return value;
  });
}
