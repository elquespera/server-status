export function hMem(bytes: number) {
  const thresh = 1024;
  const dp = 2;

  if (Math.abs(bytes) < thresh) {
    return { size: bytes.toFixed(dp), unit: "B" };
  }

  const units = ["K", "M", "G", "T", "P", "E", "Z", "Y"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return { size: bytes.toFixed(dp), unit: units[u] };
}
