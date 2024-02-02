import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class PrismaService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }
}
