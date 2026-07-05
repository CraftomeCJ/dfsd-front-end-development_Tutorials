# FED Tutorial 5 - Server and Serverless Deployment

## What I learned

### Server-based deployment
A traditional Express.js server runs as a long-lived backend service. It is suitable for full-stack apps, custom APIs, middleware, and persistent server logic.

### Serverless deployment
A serverless function runs only when requested. It is suitable for small APIs, forms, webhooks, and simple integrations.

## Tutorial Parts
- Express REST API with GET, POST, PUT, DELETE
- Deploy Express API to Render
- Convert API to serverless function
- Deploy serverless API to Vercel

## Express API — Local Setup

```bash
cd L05 Server-and-Serverless/express-api
npm install
npm start
```

Test endpoints locally:
```
GET     http://localhost:3000/
GET     http://localhost:3000/goals
POST    http://localhost:3000/goals      { "title": "My new goal" }
PUT     http://localhost:3000/goals/1   { "title": "Updated", "completed": true }
DELETE  http://localhost:3000/goals/1
```

## Render Deployment

Live API:
`<PASTE YOUR RENDER URL HERE>`

Tested endpoints:
- GET /
- GET /goals
- POST /goals
- PUT /goals/:id
- DELETE /goals/:id

## Vercel Deployment

Live API:
`<PASTE YOUR VERCEL URL HERE>/api/goals`

Tested methods:
- GET
- POST
- PUT
- DELETE

## Evidence
- Local Express API test screenshots
- Render deployment screenshot
- Render API test screenshot
- Vercel deployment screenshot
- Vercel API test screenshot
