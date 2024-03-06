import { Metadata } from "@Core/enums/metadata";

export type MethodData = {
  path: string;
  property: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
};

export function GET(path: string): MethodDecorator {
  return (target, name) => {
    const decoratedMethods: MethodData[] =
        Reflect.getMetadata(Metadata.METHODS, target) || [],
      data: MethodData = {
        path,
        property: name.toString(),
        method: "GET",
      };

    decoratedMethods.push(data);
    Reflect.defineMetadata(Metadata.METHODS, decoratedMethods, target);
  };
}

export function POST(path: string): MethodDecorator {
  return (target, name) => {
    const decoratedMethods: MethodData[] =
        Reflect.getMetadata(Metadata.METHODS, target) || [],
      data: MethodData = {
        path,
        property: name.toString(),
        method: "POST",
      };

    decoratedMethods.push(data);
    Reflect.defineMetadata(Metadata.METHODS, decoratedMethods, target);
  };
}

export function PUT(path: string): MethodDecorator {
  return (target, name) => {
    const decoratedMethods: MethodData[] =
        Reflect.getMetadata(Metadata.METHODS, target) || [],
      data: MethodData = {
        path,
        property: name.toString(),
        method: "PUT",
      };

    decoratedMethods.push(data);
    Reflect.defineMetadata(Metadata.METHODS, decoratedMethods, target);
  };
}

export function PATCH(path: string): MethodDecorator {
  return (target, name) => {
    const decoratedMethods: MethodData[] =
        Reflect.getMetadata(Metadata.METHODS, target) || [],
      data: MethodData = {
        path,
        property: name.toString(),
        method: "PATCH",
      };

    decoratedMethods.push(data);
    Reflect.defineMetadata(Metadata.METHODS, decoratedMethods, target);
  };
}

export function DELETE(path: string): MethodDecorator {
  return (target, name) => {
    const decoratedMethods: MethodData[] =
        Reflect.getMetadata(Metadata.METHODS, target) || [],
      data: MethodData = {
        path,
        property: name.toString(),
        method: "DELETE",
      };

    decoratedMethods.push(data);
    Reflect.defineMetadata(Metadata.METHODS, decoratedMethods, target);
  };
}
