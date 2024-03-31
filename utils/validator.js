export class Validator {
  constructor() {
    this.errorMessage = this.errorMessage;
  }
  whiteSpaces(credentials) {
    const invalidFields = Object.keys(credentials).filter(
      (field) => !credentials[field] || credentials[field].trim().length === 0
    );
    const message =
      "Please fill the field(s)" + invalidFields.join(", ") + "correctly!";
    this.errorMessage = message;
    return invalidFields.length !== 0;
  }

  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validateOTPCode(code) {
    const regex = /^[0-9]+$/;
    return regex.test(code);
  }

  atLeastOneValueNotEmpty(obj) {
    return !Object.values(obj).some(
      (value) =>
        value !== null &&
        value !== undefined &&
        // !value &&
        value.trim().length !== 0
    );
  }
}

export const validator = new Validator();

export default Validator;
