/**
 * Helpers Functions
 */
import lodash from "lodash";

export const mapObjectToCamelCase = (obj: any) =>
  lodash.transform(obj, (acc: any, value: any, key: string | undefined, target: any) => {
    const camelKey: string | undefined = lodash.isArray(target) ? key : lodash.camelCase(key);

    if(camelKey) {
        acc[camelKey] = lodash.isObject(value)
            ? mapObjectToCamelCase(value)
            : value;
    }
  });

export const mapObjectToSnakeCase = (obj: any) =>
  lodash.transform(obj, (acc: any, value: any, key: string | undefined, target: any) => {
    const snakeKey: string | undefined = lodash.isArray(target) ? key : lodash.snakeCase(key);

    if(snakeKey) {
        acc[snakeKey] = lodash.isObject(value)
            ? mapObjectToSnakeCase(value)
            : value;
    }
  });
