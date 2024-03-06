import { Metadata } from "core/enums/metadata";

export type AnyClass = new (...args: any[]) => any;

export interface ModuleData {
  controller: AnyClass;
  services: AnyClass[];
}

export function Module(data: ModuleData): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(Metadata.MODULE, data, target);
  };
}
