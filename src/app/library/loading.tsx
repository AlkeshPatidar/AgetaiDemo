export default function LibraryLoading() {
  return (
    <div
      aria-busy="true"
      className="flex flex-col gap-8 px-4 pb-16 pt-8 sm:px-8 lg:px-[60px]"
    >
      <div className="h-[22px] w-32 animate-pulse rounded bg-white/10" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="h-20 animate-pulse rounded-xl bg-white/5" />
        ))}
      </div>
    </div>
  );
}
