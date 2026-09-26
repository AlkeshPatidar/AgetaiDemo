import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "@/components/library/icons";
import { VideoPlayer } from "@/components/library/VideoPlayer";
import { buildStreamUrl } from "@/lib/storage";
import { isValidResourceId } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Now playing | Demo",
};

export default async function WatchPage({ params }: PageProps<"/library/[fileId]">) {
  const { fileId } = await params;

  if (!isValidResourceId(fileId)) {
    notFound();
  }

  const streamUrl = await buildStreamUrl(fileId);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-16 pt-8 sm:px-8">
      <Link
        href="/library"
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
      >
        <ChevronLeftIcon className="size-5" />
        Back to library
      </Link>
      <VideoPlayer src={streamUrl} title="Video player" />
    </div>
  );
}
