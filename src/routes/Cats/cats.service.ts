import { Cat } from "@prisma/client";
import { PrismaService } from "../../utils/db/prisma.service";
import { Service } from "@Core/decorators/service";

/**
 * A CRUD example
 */

@Service()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.cat.findMany();
  }

  getById(id: string) {
    return this.prisma.cat.findUnique({ where: { id } });
  }

  async create(data: Pick<Cat, "id" | "name" | "age" | "race">) {
    const existCat = await this.prisma.cat.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existCat) throw new Error("The cat already be registered");

    return this.prisma.cat.create({
      data,
    });
  }

  update(id: string, data: Partial<Pick<Cat, "id" | "name" | "age" | "race">>) {
    return this.prisma.cat.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.cat.delete({ where: { id } });
  }
}
