import "server-only";
import { getStorageConfig, STORAGE_REQUEST_TIMEOUT_MS } from "@/config/storage";
import { getAccessToken } from "@/lib/auth";

export class StorageApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "StorageApiError";
    this.status = status;
  }
}

type QueryParams = Record<string, string | number>;

export async function storageRequest<T>(
  path: string,
  params: QueryParams = {},
): Promise<T> {
  const { baseUrl } = getStorageConfig();
  const accessToken = await getAccessToken();

  const url = new URL(`${baseUrl}${path}`);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }

  let response: Response;
  try {
    response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(STORAGE_REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw new StorageApiError("Storage service is unreachable", 503);
  }

  if (!response.ok) {
    throw new StorageApiError(
      `Storage request failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
}
