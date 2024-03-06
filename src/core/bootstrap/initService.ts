import { AnyClass } from "@Core/decorators/module";
import { Metadata } from "@Core/enums/metadata";

export function initService(services: AnyClass[]) {
  const instances: any[] = [];

  return new Promise<typeof instances>((resolve, reject) => {
    for (const service of services) {
      const isDecorated = Reflect.hasMetadata(Metadata.SERVICE, service);

      if (!isDecorated)
        return reject(`The service "${service.name}" isn't decorated.`);

      const params: any[] = Reflect.getMetadata(Metadata.PARAMS, service) || [];

      if (params.length === 0) continue;

      const servInParamIndex = params.findIndex((p) =>
          services.some((s) => p === s)
        ),
        servModuleIndex = services.findIndex((s) => s === service),
        servParamInModule = services.findIndex((s) =>
          params.some((p) => p === s)
        );

      const serviceParams: any[] = [];
      serviceParams[servInParamIndex] = new services[servParamInModule]();

      instances.push(new services[servModuleIndex](...serviceParams));
    }

    resolve(instances);
  });
}
