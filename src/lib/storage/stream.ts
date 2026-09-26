import "server-only";
import { getStorageConfig } from "@/config/storage";
import { getAccessToken } from "@/lib/auth";

export async function buildStreamUrl(fileId: string): Promise<string> {
  const { baseUrl } = getStorageConfig();
  const accessToken = await getAccessToken();

  const url = new URL(
    `${baseUrl}/storage/stream/${encodeURIComponent(fileId)}/`,
  );
  url.searchParams.set("token", accessToken);

  return url.toString();
}
