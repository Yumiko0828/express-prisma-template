import "./core/index";
import "dotenv/config";
import { app } from "./app";
import { prisma } from "@Utils/db/prisma.service";

prisma
  .$connect()
  .then(() => {
    app.listen(app.get("port"), () => {
      console.log(`Server running at http://localhost:${app.get("port")}`);
    });
  })
  .catch(Promise.reject);
