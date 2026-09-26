import "server-only";

const DEFAULT_API_BASE_URL = "http://103.38.50.248:8005/api/v1";

export const STORAGE_PAGE_SIZE = 30;
export const STORAGE_REQUEST_TIMEOUT_MS = 15_000;

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getStorageConfig() {
  return {
    baseUrl: (process.env.STORAGE_API_BASE_URL?.trim() || DEFAULT_API_BASE_URL).replace(/\/+$/, ""),
    rootFolderId: requireEnv("STORAGE_ROOT_FOLDER_ID"),
  };
}

export function readAccessTokenFromEnv(): string {
  return requireEnv("STORAGE_ACCESS_TOKEN");
}
