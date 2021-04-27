import {
  normalize,
  schema as schemaDefinition,
  denormalize,
  Schema,
  SchemaArray,
} from "normalizr";
import { EntityMaps } from "./types";

type EntitiesShape = {
  [k in keyof EntityMaps]: {
    [id: string]: EntityMaps[k];
  };
};

function denormalizeWithType<T>(
  result: string,
  schema: Schema<T>,
  entities: EntitiesShape
): T;

function denormalizeWithType<T>(
  result: string[],
  schema: SchemaArray<T>,
  entities: EntitiesShape
): T[];

function denormalizeWithType<T>(
  result: string | string[],
  schema: Schema<T> | SchemaArray<T>,
  entities: EntitiesShape
): T | T[] {
  return denormalize(result, schema, entities);
}


function normalizeWithType<T>(
  data: T[],
  schema: SchemaArray<T>
): { result: string[]; entities: EntitiesShape }

function normalizeWithType<T>(
  data: T,
  schema: Schema<T>
): { result: string; entities: EntitiesShape }


function normalizeWithType<T>(
  data: T | T[],
  schema: Schema<T> | SchemaArray<T>
): { result: string | string[]; entities: EntitiesShape } {
  return normalize(data, schema);
}

export namespace normalizr {
  export const normalize = normalizeWithType;
  export const schema = schemaDefinition;
  export const denormalize = denormalizeWithType;
}

export default normalizr;
