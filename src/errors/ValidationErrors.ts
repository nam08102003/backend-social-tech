import CustomError from './CustomError';

class ValidationErrors extends CustomError {
  errCode = 400;
  errType = 'VALIDATION_ERROR';
  success = false;

  constructor(message: string, private property: string) {
    super(message);

    Object.setPrototypeOf(this, ValidationErrors.prototype);
  }

  serializeErrors() {
    return [{ message: this.message, property: this.property, success: this.success }];
  }
}

export default ValidationErrors;
