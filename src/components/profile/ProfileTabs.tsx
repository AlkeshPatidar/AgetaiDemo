"use client";

import { useState } from "react";
import { VideoCard } from "@/components/ui/VideoCard";
import { profileTabs, profileVideos } from "@/data/profile";
import { cn } from "@/lib/utils";

type Tab = (typeof profileTabs)[number];

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Short video");

  return (
    <div className="bg-black">
      <div
        role="tablist"
        className="flex border-b border-white/10 px-5 pt-7"
      >
        {profileTabs.map((tab) => {
          const isActive = tab === activeTab;

          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab)}
              className="flex flex-1 flex-col items-center gap-3 px-2 font-inter text-[15px] font-bold leading-5 sm:px-7"
            >
              <span
                className={cn(
                  "whitespace-nowrap transition-colors",
                  isActive ? "text-white" : "text-white/50 hover:text-white/80",
                )}
              >
                {tab}
              </span>
              <span
                className={cn(
                  "h-1 w-full rounded-full",
                  isActive ? "bg-brand" : "bg-transparent",
                )}
              />
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="p-[5px]">
        {activeTab === "Short video" ? (
          <div className="grid grid-cols-2 gap-[5px] sm:grid-cols-4">
            {profileVideos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                views={video.views}
                thumbnail={video.thumbnail}
                sizes="(min-width: 1024px) 206px, 50vw"
                className="aspect-[206/366]"
              />
            ))}
          </div>
        ) : (
          <p className="px-4 py-16 text-center font-inter text-[15px] text-white/50">
            Nothing to show in {activeTab} yet.
          </p>
        )}
      </div>
    </div>
  );
}
