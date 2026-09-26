import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { formatBytes, formatCount } from "@/lib/format";
import { getResourceKind } from "@/lib/storage/kind";
import type { StorageResource, StorageResourceKind } from "@/types/storage";
import { FolderIcon, ImageIcon, PlayIcon } from "./icons";

interface ResourceCardProps {
  resource: StorageResource;
}

const KIND_LABEL: Record<StorageResourceKind, string> = {
  folder: "Folder",
  video: "Video",
  image: "Image",
  file: "File",
};

const KIND_ICON = {
  folder: FolderIcon,
  video: PlayIcon,
  image: ImageIcon,
  file: ImageIcon,
} as const;

function getHref(resource: StorageResource, kind: StorageResourceKind) {
  const id = encodeURIComponent(resource.id);

  if (kind === "folder") return `/library?folder=${id}`;
  if (kind === "video") return `/library/${id}`;

  return null;
}

function getMeta(resource: StorageResource, kind: StorageResourceKind) {
  const parts: string[] = [KIND_LABEL[kind]];

  if (typeof resource.size === "number") {
    parts.push(formatBytes(resource.size));
  }
  if (kind === "video" && typeof resource.view_count === "number") {
    parts.push(`${formatCount(resource.view_count)} views`);
  }

  return parts.join(" · ");
}

const cardClassName =
  "group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors";

export function ResourceCard({ resource }: ResourceCardProps) {
  const kind = getResourceKind(resource);
  const href = getHref(resource, kind);
  const Icon = KIND_ICON[kind];
  const name = resource.file_name ?? resource.id;

  const content: ReactNode = (
    <>
      <div className="relative flex aspect-video items-center justify-center bg-black/40 text-white/50">
        {resource.thumbnail_url ? (
          <Image
            src={resource.thumbnail_url}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <Icon className="size-10" />
        )}
        {kind === "video" && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
            <PlayIcon className="size-12 text-white" />
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-0.5 p-4">
        <span className="truncate text-base font-semibold text-white">{name}</span>
        <span className="text-sm text-white/60">{getMeta(resource, kind)}</span>
      </div>
    </>
  );

  if (!href) {
    return <article className={cardClassName}>{content}</article>;
  }

  return (
    <Link
      href={href}
      className={`${cardClassName} hover:border-brand/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-brand`}
    >
      {content}
    </Link>
  );
}
