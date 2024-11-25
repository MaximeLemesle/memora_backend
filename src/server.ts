import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Init server
const app: Application = express();
const PORT = process.env.PORT || 8888;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, TypeScript Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});