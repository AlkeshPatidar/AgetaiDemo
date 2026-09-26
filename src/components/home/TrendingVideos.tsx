import Link from "next/link";
import { VideoCard } from "@/components/ui/VideoCard";
import { getStorageConfig } from "@/config/storage";
import { formatCount } from "@/lib/format";
import { exploreFolder } from "@/lib/storage";
import { getResourceKind } from "@/lib/storage/kind";
import type { StorageResource } from "@/types/storage";

async function loadVideos(): Promise<StorageResource[] | null> {
  try {
    const { resources } = await exploreFolder({
      folderId: getStorageConfig().rootFolderId,
    });

    return resources.filter((resource) => getResourceKind(resource) === "video");
  } catch (error) {
    console.error("Failed to load trending videos", error);
    return null;
  }
}

function Message({ children }: { children: string }) {
  return <p className="py-12 text-center text-white/60">{children}</p>;
}

export async function TrendingVideos() {
  const videos = await loadVideos();

  if (videos === null) {
    return <Message>Videos are unavailable right now. Please try again later.</Message>;
  }

  if (videos.length === 0) {
    return <Message>No videos to show yet.</Message>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {videos.map((video) => (
        <li key={video.id}>
          <Link
            href={`/library/${encodeURIComponent(video.id)}`}
            className="block focus-visible:outline-2 focus-visible:outline-brand"
          >
            <VideoCard
              variant="long"
              title={video.file_name ?? "Untitled video"}
              views={`${formatCount(video.view_count ?? 0)} views`}
              thumbnail={video.thumbnail_url}
              className="aspect-[284/200]"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function TrendingVideosSkeleton() {
  return (
    <div aria-busy="true" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="aspect-[284/200] animate-pulse border border-slate-border bg-white/5" />
      ))}
    </div>
  );
}
