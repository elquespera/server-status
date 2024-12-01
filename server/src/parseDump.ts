export function parseDump(dump: string) {
  const obj: Record<string, string> = {};

  dump.split(/\n/).map((line) => {
    const [key, value] = line.split(": ").map((s) => s.trim());
    obj[key] = value;
  });

  return obj;
}
