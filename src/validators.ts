// src/validators.ts

// General Validators
export const isRequired = (value: string): boolean => value.trim().length > 0;

export const validateLength = (
  value: string,
  min: number,
  max: number
): boolean => value.length >= min && value.length <= max;

export const isEqual = (value1: any, value2: any): boolean => value1 === value2;

// String Validators
export const isAlphanumeric = (value: string): boolean =>
  /^[a-zA-Z0-9]+$/.test(value);

export const noSpecialCharacters = (value: string): boolean =>
  /^[a-zA-Z0-9\s]+$/.test(value);

export const validateRegex = (value: string, regex: RegExp): boolean =>
  regex.test(value);

// Number Validators
export const isNumeric = (value: any): boolean => !isNaN(value);

export const validateRange = (
  value: number,
  min: number,
  max: number
): boolean => value >= min && value <= max;

// Email and Phone Validators
export const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isValidPhoneNumber = (value: string): boolean =>
  /^\+?[0-9]{10,15}$/.test(value);

// URL and Domain Validators
export const isValidURL = (value: string): boolean =>
  /^(https?:\/\/)?([\w-]+)\.([a-z]{2,})([\/\w .-]*)*\/?$/.test(value);

export const isValidDomain = (value: string): boolean =>
  /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

// Password Validators
export const isStrongPassword = (value: string): boolean =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    value
  );

// Date Validators
export const isValidDate = (value: string): boolean =>
  !isNaN(Date.parse(value));

export const isWithinDateRange = (
  value: string,
  minDate: string,
  maxDate: string
): boolean => {
  const date = new Date(value);
  return date >= new Date(minDate) && date <= new Date(maxDate);
};

// File Validators
export const isValidFileType = (file: File, allowedTypes: string[]): boolean =>
  allowedTypes.includes(file.type);

export const isValidFileSize = (file: File, maxSize: number): boolean =>
  file.size <= maxSize;

// Custom Validators
export const isConditionallyValid = (value: any, condition: boolean): boolean =>
  condition ? isRequired(value) : true;
