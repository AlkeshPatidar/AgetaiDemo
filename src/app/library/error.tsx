"use client";

export default function LibraryError({ retry }: { retry: () => void }) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 px-4 py-24 text-center"
    >
      <h2 className="text-xl font-semibold text-white">
        We couldn&apos;t load your library
      </h2>
      <p className="max-w-md text-sm text-white/60">
        The storage service is unavailable or your session has expired.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
