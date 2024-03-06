import { Module } from "@Core/decorators/module";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { PrismaService } from "@Utils/db/prisma.service";

@Module({
  controller: CatsController,
  services: [CatsService, PrismaService],
})
export class CatsModule {}
