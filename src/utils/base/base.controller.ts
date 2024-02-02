import { Application, Router } from "express";

export class BaseController<TService> {
  protected router;

  constructor(
    protected readonly app: Application,
    protected readonly service: TService,
  ) {
    this.router = Router();
    this.setupRoutes();
  }

  protected setupRoutes(): void {}
}
