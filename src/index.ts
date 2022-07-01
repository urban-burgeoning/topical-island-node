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
  res.status(200).render('base_view');
});

// Static middleware layer:
app.use(express.static("./src/static"));

// Start: 
app.listen(PORT, HOST, () => console.log("Starting server..."));