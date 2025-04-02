type StringKeyedObject = {
  [key: string]: any;
};

export function objectValues<T extends StringKeyedObject>(obj: T): Array<T[keyof T]> {
  return Object.values(obj) as Array<T[keyof T]>;
}
