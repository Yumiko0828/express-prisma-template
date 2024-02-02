import express from "express";
import morgan from "morgan";
import { CatsController } from "./routes/Cats/cats.controller";
import { CatsService } from "./routes/Cats/cats.service";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
new CatsController(app, new CatsService());
app.use("/*", notFoundHandler);
app.use(errorHandler);

export { app };
