import { run_scrape } from './api/run_scrape'

import express from 'express';


const app = express();
const port = process.env.PORT || 3001;


app.get('/', (req, res)=> {
  res.send("connected")
})


app.get('/api/run_scrape', run_scrape);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
