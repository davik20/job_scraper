# job scraper

## Job Scraper Node.js Project Documentation



Introduction
This Job Scraper project is a Node.js application that automatically scrapes job listings from various online sources, parses the data, and updates the database with the latest job opportunities. The project is designed to run automatically once a day, ensuring that the database is always up-to-date with the most recent job listings.

Table of Contents
Installation
Project Structure
Configuration
Workflow
Running the Scraper Locally
Deployment and Scheduling
Logging and Monitoring
Contributing


### Installation
To run the scraper locally, follow these steps:

Install Node.js (version 16 or newer) on your local machine.
Clone the repository and navigate to the project directory.

Run 
```
npm install 
```
to install the required dependencies.
Run
```
npm start
```

### Project Structure
The main components of the project are organized as follows:
```
src/index.ts: 
```
Entry point of the application.
```
.github/workflows/:
```
Contains the GitHub Actions workflow configuration file for automating the scraper execution.



### Environment variables
SUPABASE_URL=
SUPABASE_KEY=

keys to be sent via email
