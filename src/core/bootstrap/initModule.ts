import { ModuleData } from "@Core/decorators/module";
import { Metadata } from "@Core/enums/metadata";
import { Application } from "express";
import { initController } from "./initController";
import { initService } from "./initService";
import { routing } from "./routing";

export async function initModule(app: Application, module: Function) {
  const { controller, services }: ModuleData = Reflect.getMetadata(
    Metadata.MODULE,
    module
  );

  const { data, methods, params } = initController(controller);
  const instances = await initService(services);

  const index = instances.map((i) => params.findIndex((p) => p === i));

  console.log(index);

  const controllerInstance = new controller(...instances);
  const router = routing(methods, controllerInstance);

  app.use(data.prefix, router);
}
