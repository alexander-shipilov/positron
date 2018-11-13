function toPx(value) {
  value = (+value || 0);

  return value.toPrecision() + (value !== 0 ? "px" : "");
}

function transform(props, transform) {
  props.transform = props.WebkitTransform = (props.transform ? props.transform + " " : "") + transform;

  return props;
}

export function translate3d(props) {
  const translate = [0, 0];
  let translated = false;

  if (props.left != null) {
    translate[0] = props.left;
    props.left = 0;
    translated = true;
  }

  if (props.top != null) {
    translate[1] = props.top;
    props.top = 0;
    translated = true;
  }

  return translated ? transform(props, `translate3D(${ toPx(translate[0]) }, ${ toPx(translate[1]) }, 0)`) : props;
}

export function scale3d(props) {
  const scale = [1, 1];
  let scaled = false;

  if (props.width != null) {
    scale[0] = props.width;
    props.width = 1;
    scaled = true;
  }

  if (props.height != null) {
    scale[1] = props.height;
    props.height = 1;
    scaled = true;
  }

  return scaled ? transform(props, `scale3D(${ scale[0] }, ${ scale[1] }, 1)`) : props;
}

export function transform3d(props) {
  return scale3d(translate3d({ ...props }));
}
