export function floor(value, tolerance = 1) {
  return tolerance <= 0 || isNaN(value) || isNaN(tolerance) ? NaN : Math.floor(value / tolerance) * tolerance;
}
