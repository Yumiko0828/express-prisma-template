import "dotenv/config";
import { prisma } from "@/utils/db/prisma.service";
import { app } from "@/app";

prisma
  .$connect()
  .then(() => {
    app.listen(app.get("port"), () => {
      console.log(`Server running at http://localhost:${app.get("port")}`);
    });
  })
  .catch(Promise.reject);
