import { Service } from "@Core/decorators/service";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

@Service()
export class PrismaService extends PrismaClient {}
