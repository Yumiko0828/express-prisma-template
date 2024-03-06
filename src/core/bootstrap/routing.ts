import { MethodData } from "@Core/decorators/methods";
import { Router } from "express";

export function routing(methods: MethodData[], controller: any) {
  const router = Router();

  for (const { method, path, property } of methods) {
    router[method.toLowerCase() as Lowercase<typeof method>](
      path,
      controller[property]
    );
  }

  return router;
}
