export interface StorageResource {
  id: string;
  resource_type: string;
  file_name?: string;
  file_type?: string;
  size?: number;
  thumbnail_url?: string | null;
  view_count?: number;
}

export interface DirectoryContext {
  folder_id: string;
  name: string;
  media_count?: number;
}

export interface ExploreResponse {
  message?: string;
  data: {
    directory_context: DirectoryContext;
    pagination?: { limit: number; next_page_token: string | null };
    resources: StorageResource[];
  };
}

export interface DirectoryListing {
  folder: Pick<DirectoryContext, "folder_id" | "name">;
  resources: StorageResource[];
}

export type StorageResourceKind = "folder" | "video" | "image" | "file";
