import { Metadata } from "@Core/enums/metadata";

export interface ControllerData {
  prefix: string;
}

export function Controller(name: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(
      Metadata.CONTROLLER,
      {
        prefix: `/${name}`,
      } as ControllerData,
      target
    );
  };
}
