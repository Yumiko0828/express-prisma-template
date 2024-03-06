import { ControllerData } from "@Core/decorators/controller";
import { AnyClass } from "@Core/decorators/module";
import { Metadata } from "@Core/enums/metadata";

export function initController(controller: AnyClass) {
  const isDecorated = Reflect.hasMetadata(Metadata.CONTROLLER, controller);

  if (!isDecorated)
    throw new Error(`The controller "${controller.name}" isn't decorated.`);

  const data: ControllerData = Reflect.getMetadata(
      Metadata.CONTROLLER,
      controller
    ),
    params: any[] = Reflect.getMetadata(Metadata.PARAMS, controller) || [],
    methods = Reflect.getMetadata(Metadata.METHODS, controller.prototype) || [];

  return {
    data,
    params,
    methods,
  };
}
