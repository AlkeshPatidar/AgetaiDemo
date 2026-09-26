export const siteConfig = {
  name: "Demo",
  description: "Demo application built with Next.js",
  nav: [
    { label: "Home", href: "/", icon: "/icons/home.svg" },
    { label: "Library", href: "/library", icon: "/icons/video.svg" },
    { label: "Films", href: "#", icon: "/icons/film.svg" },
    { label: "Reels", href: "#", icon: "/icons/reels.svg" },
    { label: "Topics", href: "#", icon: "/icons/hash.svg" },
    { label: "History", href: "#", icon: "/icons/history.svg" },
  ],
  profileHref: "/profile",
} as const;
