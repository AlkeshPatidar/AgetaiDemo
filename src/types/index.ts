export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
  bio?: string;
}

export interface Playlist {
  id: string;
  title: string;
  count: string;
  tint: string;
  image: string;
}

export interface Video {
  id: string;
  title: string;
  views: string;
  thumbnail: string;
}

export interface Story {
  id: string;
  name: string;
}
