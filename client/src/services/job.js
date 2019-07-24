export const jobService = {
  getJobs
};

async function getJobs() {
  let res = await fetch("http://localhost:4000/api/jobs");
  let jobs = await res.text();

  return JSON.parse(jobs, (key, value) => {
    if (key === "startTime" || key === "endTime") {
      return new Date(value);
    }
    return value;
  });
}
