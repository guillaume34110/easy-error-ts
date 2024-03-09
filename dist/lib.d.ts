/**
 * Represents a custom error with a code and message.
 * @typedef {Object} CustomError
 * @property {number} code - The error code.
 * @property {string} message - The error message.
 */
export type EasyCustomError = {
    code: number;
    message: string;
};
/**
 * Represents a value of type T with no error.
 * @typedef {[T, undefined]} EasyLeft
 * @template T
 */
export type EasyLeft<T> = [T, undefined];
/**
 * Represents an error with no value.
 * @typedef {[undefined, EasyCustomError]} EasyRight
 */
export type EasyRight = [undefined, EasyCustomError];
/**
 * Represents a value of type T or an error.
 * @typedef {[T, undefined] | [undefined, EasyCustomError]} Either
 * @template T
 */
export type EasyEither<T> = [T, undefined] | [undefined, EasyCustomError];
/**
 * Creates a Left instance with a value of type T and no error.
 * @function
 * @template T
 * @param {T} value - The value of type T.
 * @returns {EasyLeft<T>} The Left instance.
 */
export declare const left: <T>(value: T) => EasyLeft<T>;
/**
 * Creates a Right instance with a CustomError.
 * @function
 * @param {number} code - The error code.
 * @param {string} message - The error message.
 * @returns {EasyRight} The Right instance.
 */
export declare const right: (code: number, message: string) => EasyRight;
/**
 * The main easyError object containing all exports.
 */
declare const easyError: {
    left: <T>(value: T) => EasyLeft<T>;
    right: (code: number, message: string) => EasyRight;
};
export default easyError;
