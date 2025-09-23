import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import funFactsApi from './api/funfacts.controller';

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(express.json());

// Now add logging middleware (optional)
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});

console.log('CORS and JSON middleware applied');

// FunFacts API routes
app.use('/api/funfacts', funFactsApi);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});