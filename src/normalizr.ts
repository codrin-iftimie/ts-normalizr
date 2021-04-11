import { normalize, schema, denormalize, Schema } from "normalizr";

function denormalizeWithType<T>(
  result: string,
  schema: Schema<T>,
  entities: any
): T

function denormalizeWithType<T>(
  result: string[],
  schema: Schema<T>,
  entities: any
): T[]

function denormalizeWithType<T>(
  result: string | string[],
  schema: Schema<T>,
  entities: any
): T {
  return denormalize(result, schema, entities);
}

function normalizeWithType<T>(data:any, schema: Schema<T>) {
  return normalize(data, schema)
}

export default { normalize: normalizeWithType, schema, denormalize: denormalizeWithType };
