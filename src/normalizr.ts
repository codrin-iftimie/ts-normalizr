import { normalize, schema as schemaDefinition, denormalize, Schema } from "normalizr";

function denormalizeWithType<T>(
  result: string,
  schema: Schema<T>,
  entities: any
): T;

function denormalizeWithType<T>(
  result: string[],
  schema: Schema<T>,
  entities: any
): T[];

function denormalizeWithType<T>(
  result: string | string[],
  schema: Schema<T>,
  entities: any
): T {
  return denormalize(result, schema, entities);
}

function normalizeWithType<T>(data: any, schema: Schema<T>) {
  return normalize(data, schema);
}

export namespace normalizr {
  export const normalize = normalizeWithType;
  export const schema = schemaDefinition;
  export const denormalize = denormalizeWithType;
}

export default normalizr;
