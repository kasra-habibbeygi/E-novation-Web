import { regularExpressions, ValidationMassages } from "../constants/Types";

export function sizeValidation(string) {
  if (string.length < 6) {
    return ValidationMassages.size;
  } else {
    return null;
  }
}
export function emailValidation(string) {
  if (!regularExpressions.ValidationEmail.test(string)) {
    return ValidationMassages.email;
  } else {
    return null;
  }
}
export function passValidation(string) {
  return null;
}
