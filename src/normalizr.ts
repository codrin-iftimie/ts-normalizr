import {
  normalize,
  schema as schemaDefinition,
  denormalize,
  Schema,
} from "normalizr";
import { EntityMaps } from "./types";

type EntitiesShape = {
  [k in keyof EntityMaps]: {
    [id in string]: EntityMaps[k];
  };
};

function denormalizeWithType<T>(
  result: string,
  schema: Schema<T>,
  entities: EntitiesShape
): T;

function denormalizeWithType<T>(
  result: string[],
  schema: Schema<T>,
  entities: EntitiesShape
): T[];

function denormalizeWithType<T>(
  result: string | string[],
  schema: Schema<T>,
  entities: EntitiesShape
): T {
  return denormalize(result, schema, entities);
}


function normalizeWithType<T>(
  data: any[],
  schema: Schema<T>
): { result: string[]; entities: EntitiesShape }

function normalizeWithType<T>(
  data: any,
  schema: Schema<T>
): { result: string; entities: EntitiesShape }


function normalizeWithType<T>(
  data: any | any[],
  schema: Schema<T>
): { result: string | string[]; entities: EntitiesShape } {
  return normalize(data, schema);
}

export namespace normalizr {
  export const normalize = normalizeWithType;
  export const schema = { ...schemaDefinition };
  export const denormalize = denormalizeWithType;
}

export default normalizr;
