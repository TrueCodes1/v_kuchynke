import PasswordMeter from "password-meter";
import validator from "validator";

/**
 *
 * @param {string} string - string to be validated
 * @returns boolean
 */
export const validateName = (string) => {
  if (string.replaceAll(" ", "").length > 0) return true;
  return false;
};

/**
 *
 * @param {string} string - string to be validated
 * @returns boolean
 */
export const validateEmail = (string) => {
  return validator.isEmail(string);
};

/**
 *
 * @param {string} password - password whose strength to be measured
 * @returns {integer} 0-10
 */
export const getPasswordStrength = (password) => {
  return Math.floor(
    new PasswordMeter.PasswordMeter().getResult(password).percent
  );
};

/**
 *
 * @param {string} password - password to be compared
 * @param {string} passwordRepeat - second password to be compared
 * @returns boolean
 */
export const validatePasswordsMatch = (password, passwordRepeat) => {
  if (password.length > 0 && passwordRepeat.length > 0)
    return password === passwordRepeat;
  return false;
};

/**
 *
 * @param {array} args - booleans to check
 * @returns boolean
 */
export const generalValidation = (...args) => {
  return !args.includes(false);
};

/**
 *
 * @param  {any} args - booleans from which the percentage will be calculated
 * @returns integer - percentage of *true* inside among the arguments
 */
export const getReadyPercentage = (...args) => {
  return (args.filter((arg) => arg === true).length / args.length) * 100;
};
