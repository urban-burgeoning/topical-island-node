/* Express root */
import express from 'express';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App:
const app = express();

// Register view engine:
app.set("view engine", "pug")
app.set("views", "./src/views")

// Routes:
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).render('homepage');
});
app.get('/setup', (req: express.Request, res: express.Response) => {
  res.status(200).render('setup');
});
app.get('/css', (req: express.Request, res: express.Response) => {
  res.status(200).render('css');
});
app.get('/github-actions', (req: express.Request, res: express.Response) => {
  res.status(200).render('github_actions');
});

// Setup middleware layers:
app.use(express.static("./src/static"));
app.use(express.json());

// Start: 
app.listen(PORT, HOST, () => console.log("Starting server..."));