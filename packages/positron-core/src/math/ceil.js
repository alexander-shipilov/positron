export function ceil(value, tolerance = 1) {
    return tolerance <= 0 || isNaN(value) || isNaN(tolerance) ? NaN : Math.ceil(value / tolerance) * tolerance;
}
