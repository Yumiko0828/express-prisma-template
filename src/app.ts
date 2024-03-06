import express from "express";
import morgan from "morgan";
import { notFoundHandler } from "@Middlewares/notFoundHandler";
import { errorHandler } from "@Middlewares/errorHandler";
import { CatsModule } from "@Routes/Cats/cats.module";
import { initModule } from "@Core/bootstrap/initModule";

const app = express();
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
initModule(app, CatsModule);
app.use("/*", notFoundHandler);
app.use(errorHandler);

export { app };
