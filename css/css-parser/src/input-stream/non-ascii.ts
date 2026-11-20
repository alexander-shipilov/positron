import { CharFlag } from "./char-flag";
import { CODE_POINT_LIMIT } from "./code-point-limit";

/**
 * @internal
 */
export const NonASCII = [
  [0x000080, CharFlag.No],
  [0x0000b7, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x0000b8, CharFlag.No],
  [0x0000c0, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x0000d7, CharFlag.No],
  [0x0000d8, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x0000f7, CharFlag.No],
  [0x0000f8, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x00037e, CharFlag.No],
  [0x00037f, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x002000, CharFlag.No],
  [0x00200c, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x00200e, CharFlag.No],
  [0x00203f, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x002041, CharFlag.No],
  [0x002070, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x002190, CharFlag.No],
  [0x002c00, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x002ff0, CharFlag.No],
  [0x003001, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x00d800, CharFlag.No],
  [0x00f900, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x00fdd0, CharFlag.No],
  [0x00fdf0, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [0x00fffe, CharFlag.No],
  [0x010000, CharFlag.In | CharFlag.Is | CharFlag.Id],
  [CODE_POINT_LIMIT, CharFlag.No],
];
