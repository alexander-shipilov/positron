export function getScrollTop() {
  return Math.max(
      document.body.scrollTop || 0,
      document.documentElement.scrollTop || 0
  );
}
