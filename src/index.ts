// app.ts

import express from 'express';
import { run_scrape } from './api/run_scrape';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/run_scrape', run_scrape);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
