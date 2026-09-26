"use client";

import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  title: string;
}

const PLAYBACK_ERROR_MESSAGE =
  "This video could not be played. Please try again later.";

export function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!Hls.isSupported()) {
      video.src = src;
      return;
    }

    const token = new URL(src).searchParams.get("token");

    const hls = new Hls({
      xhrSetup: (xhr) => {
        if (token) {
          xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        }
      },
    });

    hls.on(Hls.Events.ERROR, (_event, data) => {
      if (!data.fatal) return;

      if (data.type === Hls.ErrorTypes.NETWORK_ERROR && data.response?.code !== 401) {
        hls.startLoad();
        return;
      }

      if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
        hls.recoverMediaError();
        return;
      }

      setHasError(true);
      hls.destroy();
    });

    hls.loadSource(src);
    hls.attachMedia(video);

    return () => hls.destroy();
  }, [src]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
      <video
        ref={videoRef}
        aria-label={title}
        controls
        playsInline
        preload="metadata"
        onError={() => setHasError(true)}
        className="size-full"
      />
      {hasError && (
        <div
          role="alert"
          className="absolute inset-0 flex items-center justify-center bg-black/80 p-6 text-center text-sm text-white/80"
        >
          {PLAYBACK_ERROR_MESSAGE}
        </div>
      )}
    </div>
  );
}
