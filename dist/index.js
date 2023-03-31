"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
console.log(node_fetch_1.default);
// const exampleAUrl = "https://www.examplea.com/careers";
// const exampleBUrl = "https://www.exampleb.com/jobs";
// const exampleCUrl = "https://www.examplec.com/career";
// const fetchHtml = async (url: string): Promise<string> => {
//   const response = await fetcher(url);
//   return await response.text();
// };
// const scrapeExampleA = async (): Promise<Job[]> => {
//   const html = await fetchHtml(exampleAUrl);
//   const $ = cheerio.load(html);
//   const jobs: Job[] = [];
//   // Replace '.job-selector' with the actual CSS selector for the job titles.
//   $(".job-selector").each((_i, element) => {
//     const title = $(element).text().trim();
//     jobs.push({ title, company: "Example Company A" });
//   });
//   return jobs;
// };
// const scrapeExampleB = async (): Promise<Job[]> => {
//   const html = await fetchHtml(exampleBUrl);
//   const $ = cheerio.load(html);
//   const jobs: Job[] = [];
//   // Replace '.job-selector' with the actual CSS selector for the job titles.
//   $(".job-selector").each((_i, element) => {
//     const title = $(element).text().trim();
//     jobs.push({ title, company: "Example Company B" });
//   });
//   return jobs;
// };
// const scrapeExampleC = async (): Promise<Job[]> => {
//   const html = await fetchHtml(exampleCUrl);
//   const $ = cheerio.load(html);
//   const jobs: Job[] = [];
//   // Replace '.job-selector' with the actual CSS selector for the job titles.
//   $(".job-selector").each((_i, element) => {
//     const title = $(element).text().trim();
//     jobs.push({ title, company: "Example Company C" });
//   });
//   return jobs;
// };
// const main = async () => {
//   const jobsExampleA = await scrapeExampleA();
//   const jobsExampleB = await scrapeExampleB();
//   const jobsExampleC = await scrapeExampleC();
//   const allJobs = [...jobsExampleA, ...jobsExampleB, ...jobsExampleC];
//   console.log(allJobs);
// };
// main();
//# sourceMappingURL=index.js.map