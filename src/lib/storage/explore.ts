import "server-only";
import { STORAGE_PAGE_SIZE } from "@/config/storage";
import type {
  DirectoryListing,
  ExploreResponse,
  StorageResource,
} from "@/types/storage";
import { StorageApiError, storageRequest } from "./client";

interface ExploreOptions {
  folderId: string;
  limit?: number;
}

function isStorageResource(value: unknown): value is StorageResource {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as { id?: unknown }).id === "string"
  );
}

export async function exploreFolder({
  folderId,
  limit = STORAGE_PAGE_SIZE,
}: ExploreOptions): Promise<DirectoryListing> {
  const body = await storageRequest<Partial<ExploreResponse>>(
    "/storage/explore/",
    { folder_id: folderId, limit },
  );

  const resources: unknown = body?.data?.resources;

  if (!Array.isArray(resources)) {
    throw new StorageApiError("Unexpected explore response shape", 502);
  }

  const context = body.data?.directory_context;

  return {
    folder: {
      folder_id: context?.folder_id ?? folderId,
      name: context?.name ?? "Library",
    },
    resources: resources.filter(isStorageResource),
  };
}
