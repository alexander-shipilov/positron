export function round(value, tolerance = 1) {
  return tolerance <= 0 || isNaN(value) || isNaN(tolerance) ? NaN : Math.round(value / tolerance) * tolerance;
}
