import { Suspense } from "react";
import { PlaylistCard } from "@/components/home/PlaylistCard";
import {
  TrendingVideos,
  TrendingVideosSkeleton,
} from "@/components/home/TrendingVideos";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StoryRing } from "@/components/ui/StoryRing";
import { VideoCard } from "@/components/ui/VideoCard";
import { playlists, reels, stories } from "@/data/home";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col gap-[26px] px-4 pb-16 pt-8 sm:px-8 lg:px-[60px]">
      <section className="flex flex-col gap-[26px]">
        <SectionHeader
          title="Stories"
          action={{ label: "All stories", href: "#" }}
        />
        <div className="scrollbar-none -mx-1 flex gap-6 overflow-x-auto px-1">
          <StoryRing name="Create new" create />
          {stories.map((story) => (
            <StoryRing key={story.id} name={story.name} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[26px]">
        <SectionHeader
          title="💖 Playlist & chill"
          action={{ label: "All playlists", href: "#" }}
        />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} {...playlist} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[26px]">
        <SectionHeader
          title="🚀 Most trending porn & reels"
          action={{ label: "All reels", href: "#" }}
        />
        <div className="grid grid-cols-2 gap-1 lg:grid-cols-4">
          {reels.map((reel) => (
            <VideoCard
              key={reel.id}
              title={reel.title}
              views={reel.views}
              thumbnail={reel.thumbnail}
              className="aspect-[272/465]"
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[26px]">
        <SectionHeader
          title="🚀 Most trending Long videos"
          action={{ label: "All videos", href: "/library" }}
        />
        <Suspense fallback={<TrendingVideosSkeleton />}>
          <TrendingVideos />
        </Suspense>
      </section>
    </div>
  );
}
