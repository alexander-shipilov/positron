export const mockElement = {
  getBoundingClientRect: () => ({
    left: 10,
    top: 20,
    width: 100,
    height: 200,
    right: 110,
    bottom: 220
  })
};

export const mockParent = {
  getBoundingClientRect: () => ({
    left: 30,
    top: 40,
    width: 300,
    height: 400,
    right: 330,
    bottom: 440
  })
};

export const mockEvent = {
  clientX: 100,
  clientY: 200,
  screenX: 300,
  screenY: 400
};
