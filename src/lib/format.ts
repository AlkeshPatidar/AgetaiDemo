const BYTE_UNITS = ["B", "KB", "MB", "GB", "TB"];

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";

  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    BYTE_UNITS.length - 1,
  );
  const value = bytes / 1024 ** exponent;
  const formatted = exponent === 0 || value >= 10 ? Math.round(value) : value.toFixed(1);

  return `${formatted} ${BYTE_UNITS[exponent]}`;
}

const compactNumber = new Intl.NumberFormat("en", { notation: "compact" });

export function formatCount(count: number): string {
  return compactNumber.format(count);
}
