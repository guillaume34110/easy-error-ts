"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = void 0;
/**
 * Creates a Left instance with a value of type T and no error.
 * @function
 * @template T
 * @param {T} value - The value of type T.
 * @returns {EasyLeft<T>} The Left instance.
 */
var left = function (value) { return [value, undefined]; };
exports.left = left;
/**
 * Creates a Right instance with a CustomError.
 * @function
 * @param {number} code - The error code.
 * @param {string} message - The error message.
 * @returns {EasyRight} The Right instance.
 */
var right = function (code, message) { return [
    undefined,
    { code: code, message: message },
]; };
exports.right = right;
/**
 * The main easyError object containing all exports.
 */
var easyError = {
    left: exports.left,
    right: exports.right,
};
exports.default = easyError;
