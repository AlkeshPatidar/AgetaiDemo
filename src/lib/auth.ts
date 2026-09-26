import "server-only";
import { readAccessTokenFromEnv } from "@/config/storage";

export async function getAccessToken(): Promise<string> {
  return readAccessTokenFromEnv();
}
