const fetch = require('node-fetch')
import * as cheerio from 'cheerio';
import { companies, Company } from '../src/constants/companies';
import { createClient } from '@supabase/supabase-js';
import puppeteer from 'puppeteer'
import Job from '../src/interfaces/jobs';
const dotenv = require('dotenv')




dotenv.config();

export async function run_scrape(req: any, res: any): Promise<void> {
  const supabaseUrl = "https://dkwqunprrqmhmbtnfuzs.supabase.co";
  const supabaseKey: any = process.env.SUPABASE_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  async function storeJobs(jobs: Job[]): Promise<void> {
    for (const job of jobs) {
      const { title, company } = job;

      const { error } = await supabase
        .from('jobs')
        .insert([{ title, company }], {});

      if (error && error.code === '23505') {
        console.log('Duplicate entry:', job);
      } else if (error) {
        console.error('Error inserting job:', error);
      }
    }
  }

  const scrape = async (companies: Company[]): Promise<Job[][]> => {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        // Add any other arguments you need
      ],
    });
    const promises = companies.map(async (company: Company) => {
      const jobs: Job[] = [];
      const page = await browser.newPage();
      await page.goto(company.url);
      const content = await page.content();
      const $ = cheerio.load(content);
      const $jobs = $(company.selector);

      $jobs.each((_, e) => {
        const title = $(e).text().trim();
        jobs.push({ title, company: company.name });
      });

      return jobs;
    });

    const results = await Promise.all(promises);
    await browser.close();
    return results;
  };







  const main = async () => {
    const jobArrays = await scrape(companies);
    const jobs = jobArrays.flat();
    await storeJobs(jobs);
    console.log(jobs);
    res.send(200)
  };

  main();

}





