export const mockCpuTemp = () =>
  Array.from({ length: 20 })
    .fill("")
    .map(() => Math.random() * 15 + 20);

export const parseCpuTemp = (dump: string) => {
  const rawTemps = dump.split(/\n/).map(Number);

  return [
    ...rawTemps.slice(0, 6),
    (rawTemps[6] + rawTemps[7]) / 2,
    (rawTemps[8] + rawTemps[9]) / 2,
  ].map((n) => n / 1000);
};
