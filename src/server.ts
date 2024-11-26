import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Init server
const app: Application = express();
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


// const album = {
//   title: 'Voyage Pologne',
//   album_description: 'Voyage en Pologne en 2021',
// };

// Routes album
import album from './routes/album.routes.ts';
app.use('/api/album', album);

// const express = require('express')const app = express()const parkings = require('./parkings.json')// Middlewareapp.use(express.json())app.get('/parkings', (req,res) => {    res.status(200).json(parkings)})app.get('/parkings/:id', (req,res) => {    const id = parseInt(req.params.id)    const parking = parkings.find(parking => parking.id === id)    res.status(200).json(parking)})app.post('/parkings', (req,res) => {    parkings.push(req.body)    res.status(200).json(parkings)})app.listen(8080, () => {    console.log("Serveur à l'écoute")})

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