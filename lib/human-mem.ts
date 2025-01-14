export function hMem(bytes: number, si = true, precision = 2) {
  const thresh = si ? 1024 : 1000;

  if (Math.abs(bytes) < thresh) {
    return { size: bytes.toFixed(precision), unit: "B" };
  }

  const units = ["K", "M", "G", "T", "P", "E", "Z", "Y"];
  let u = -1;
  const r = 10 ** precision;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return { size: bytes.toFixed(precision), unit: units[u] };
}
