import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';


// Init server
const app: Application = express();
dotenv.config();
const PORT = process.env.PORT || 8888;

// Middleware
app.use(express.json());
app.set('view engine', 'ejs');

// Redirect to /api
app.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
});


// Get home page
app.get("/api", (req: Request, res: Response): void => {
  res.status(200).render('views');
});

// Routes user
import user from './routes/user.routes.ts';
app.use('/api/user', user);

// Routes album
import album from './routes/album.routes.ts';
app.use('/api/album', album);

// Routes page
import page from './routes/page.routes.ts';
app.use('/api/page', page);

// Routes comment
import comment from './routes/comment.routes.ts';
app.use('/api/comment', comment);

// Routes photo
import photo from './routes/photo.routes.ts';
app.use('/api/photo', photo);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});