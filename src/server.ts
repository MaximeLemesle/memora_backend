import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

// Routes import
import user from "./routes/user.routes.ts";
import album from "./routes/album.routes.ts";
import page from "./routes/page.routes.ts";
import comment from "./routes/comment.routes.ts";
import photo from "./routes/photo.routes.ts";

function start() {
  try {
    // Init server
    const app: Application = express();
    const PORT = process.env.PORT || 8888;

    // Middleware
    app.use(express.json());
    app.set("view engine", "ejs");

    // Redirect to /api
    app.get("/", (req: Request, res: Response) => {
      res.redirect("/api");
    });

    // Get home page
    app.get("/api", (req: Request, res: Response): void => {
      res.status(200).render("views");
    });

    // End points
    app.use("/api/user", user);
    app.use("/api/album", album);
    app.use("/api/page", page);
    app.use("/api/comment", comment);
    app.use("/api/photo", photo);

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Error on the launching of the server : ${error}`);
  }
}

start();
