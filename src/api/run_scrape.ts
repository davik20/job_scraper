const fetch = require('node-fetch')
import * as cheerio from 'cheerio';
import { companies, Company } from '../constants/companies';
import { createClient } from '@supabase/supabase-js';
import puppeteer from 'puppeteer'
import Job from '../interfaces/jobs';
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
        '--disable-dev-shm-usage',
        '--single-process',
      ],
    });

    const promises = companies.map(async (company: Company) => {
      const jobs: Job[] = [];
      const page = await browser.newPage();
      await page.goto(company.url, {timeout:100000});
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
  
    try {
      const jobArrays = await scrape(companies);
      const jobs = jobArrays.flat();
      console.log(jobs);
      await storeJobs(jobs); 
       res.status(200).send("Running function");

    } catch (error) {
      console.log(error)
    }
  
   
  };

  main();

}





