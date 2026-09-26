import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

const RESOURCE_ID_PATTERN = /^[A-Za-z0-9_-]{1,128}$/;

export function isValidResourceId(value: unknown): value is string {
  return typeof value === "string" && RESOURCE_ID_PATTERN.test(value);
}
