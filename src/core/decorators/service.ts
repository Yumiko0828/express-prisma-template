import { Metadata } from "@Core/enums/metadata";

export function Service(): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(Metadata.SERVICE, true, target);
  };
}
