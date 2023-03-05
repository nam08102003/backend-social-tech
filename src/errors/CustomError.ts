abstract class CustomError extends Error {
  abstract errCode: number;
  abstract errType: string;
  abstract success: boolean;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; property?: string; success?: boolean }[];
}

export default CustomError;
