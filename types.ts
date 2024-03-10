export type EasyCustomError = {
    code: number;
    message: string;
  };

export type EasyEither<T> = [T, undefined] | [undefined, EasyCustomError];
