import type { StorageResource, StorageResourceKind } from "@/types/storage";

export function getResourceKind(resource: StorageResource): StorageResourceKind {
  if (resource.resource_type === "FOLDER") return "folder";

  switch (resource.file_type) {
    case "VIDEO":
      return "video";
    case "IMAGE":
      return "image";
    default:
      return "file";
  }
}
