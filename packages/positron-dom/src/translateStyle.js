export function translateStyle(left = 0, top = 0) {
  const transform = `translate3D(${ left }px, ${ top }px, 0)`;

  return {
    left: 0,
    top: 0,
    transform: transform,
    WebkitTransform: transform
  };
}
