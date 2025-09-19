import express from 'express';
import dotenv from 'dotenv';
import funFactsApi from './api/funfacts.controller';

// Load environment variables from .env
dotenv.config();

const app = express();
app.use(express.json());

// Example route
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

// FunFacts API routes
app.use('/api/funfacts', funFactsApi);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
