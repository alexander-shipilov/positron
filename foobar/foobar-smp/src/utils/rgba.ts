export function rgba(
  red: number,
  green: number,
  blue: number,
  alpha: number = 255,
): number {
  return (alpha << 24) | (red << 16) | (green << 8) | blue;
}
