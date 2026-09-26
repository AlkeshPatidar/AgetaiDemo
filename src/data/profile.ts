import type { Story, Video } from "@/types";

export const profile = {
  name: "Stas Neprokin",
  status: "Available Now",
  bio: "SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft.",
  freePlaylists: "2 Free Playlists",
  paidPlaylists: "4 Paid Playlists",
  location: "Earth",
  joined: "joined April 2009",
  links: ["spacex.com", "spacex.com", "spacex.com", "spacex.com"],
  following: "143",
  views: "149",
  likes: "149",
} as const;

export const profileStories: Story[] = Array.from({ length: 10 }, (_, i) => ({
  id: `profile-story-${i + 1}`,
  name: "John Deo",
}));

export const profileTabs = [
  "Long video",
  "Short video",
  "Playlist",
  "Guestbook",
] as const;

export const profileVideos: Video[] = Array.from({ length: 8 }, (_, i) => ({
  id: `profile-video-${i + 1}`,
  title: "The Handmaidens",
  views: "3.1M views",
  thumbnail: "/images/reel-thumbnail.png",
}));

export const profileStats = [
  { id: "views", value: "63.5M", label: "Views" },
  { id: "likes", value: "1.2M", label: "Likes" },
  { id: "visits", value: "1.6M", label: "Visits" },
  { id: "shares", value: "1.4M", label: "Shares" },
  { id: "videos", value: "1,169", label: "videos" },
] as const;

export const videoCategories = [
  "Traveling",
  "Corporate Life",
  "Couples",
  "Trending Topic",
  "Festival",
  "Music listening",
  "Reading time",
  "Onlyfans",
] as const;
