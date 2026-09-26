import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeftIcon } from "@/components/library/icons";
import { ResourceCard } from "@/components/library/ResourceCard";
import { getStorageConfig } from "@/config/storage";
import { exploreFolder } from "@/lib/storage";
import { isValidResourceId } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Library | Demo",
};

export default async function LibraryPage({ searchParams }: PageProps<"/library">) {
  const { folder } = await searchParams;
  const { rootFolderId } = getStorageConfig();

  const isSubfolder = isValidResourceId(folder) && folder !== rootFolderId;
  const listing = await exploreFolder({
    folderId: isSubfolder ? folder : rootFolderId,
  });

  return (
    <div className="flex flex-col gap-8 px-4 pb-16 pt-8 sm:px-8 lg:px-[60px]">
      <header className="flex items-center gap-4">
        {isSubfolder && (
          <Link
            href="/library"
            aria-label="Back to library"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeftIcon className="size-5" />
          </Link>
        )}
        <h1 className="text-[22px] font-medium leading-[22px] tracking-[0.66px] text-white">
          {listing.folder.name}
        </h1>
      </header>

      {listing.resources.length === 0 ? (
        <p className="py-16 text-center text-white/60">This folder is empty.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listing.resources.map((resource) => (
            <li key={resource.id}>
              <ResourceCard resource={resource} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
