export function parseDump(
  dump: string,
  lineSeparator: string | RegExp = /\n/,
  keyValueSeparator = ":",
) {
  const obj: Record<string, string> = {};

  dump.split(lineSeparator).map((line) => {
    const [key, value] = line.split(keyValueSeparator).map((s) => s.trim());
    obj[key] = value;
  });

  return obj;
}
