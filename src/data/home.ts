import type { Playlist, Story, Video } from "@/types";

export const stories: Story[] = Array.from({ length: 8 }, (_, i) => ({
  id: `story-${i + 1}`,
  name: "John Deo",
}));

export const playlists: Playlist[] = [
  { id: "actors", title: "Actors", count: "150+ Videos", tint: "255, 90, 77", image: "/images/story-front.jpg" },
  { id: "creators", title: "Creators", count: "50+ Video", tint: "56, 193, 114", image: "/images/playlist-creators.jpg" },
  { id: "comedy-1", title: "Comedy", count: "30+ Videos", tint: "0, 151, 234", image: "/images/playlist-comedy.jpg" },
  { id: "comedy-2", title: "Comedy", count: "30+ Videos", tint: "234, 0, 0", image: "/images/playlist-comedy.jpg" },
  { id: "musicians", title: "Musicians", count: "80+ Videos", tint: "142, 68, 173", image: "/images/playlist-musicians.jpg" },
  { id: "athletes", title: "Athletes", count: "60+ Videos", tint: "216, 27, 96", image: "/images/playlist-athletes.jpg" },
  { id: "reality-tv-1", title: "Reality TV", count: "150+ Videos", tint: "198, 168, 39", image: "/images/playlist-reality-tv.jpg" },
  { id: "reality-tv-2", title: "Reality TV", count: "150+ Videos", tint: "68, 0, 255", image: "/images/playlist-reality-tv.jpg" },
];

export const reels: Video[] = Array.from({ length: 4 }, (_, i) => ({
  id: `reel-${i + 1}`,
  title: "The Handmaidens",
  views: "3.1M views",
  thumbnail: "/images/reel-thumbnail.png",
}));
