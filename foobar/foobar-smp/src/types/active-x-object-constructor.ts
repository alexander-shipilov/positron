import type { ActiveXObject } from "./active-x-object";

/**
 * The {@link ActiveXObjectConstructor} interface represents a type of global
 * `ActiveXObject`.
 *
 * @public
 */
export interface ActiveXObjectConstructor {
  /**
   * The {@link ActiveXObjectConstructor.ActiveX_CreateArray} method creates an
   * instance of {@link ActiveXObject} that contains an object of type
   * `(VT_ARRAY | SOME_TYPE)`.
   *
   * @example
   * ```ts
   *  const filename = 'x:\\file.bin';
   *  const binData = [0x01, 0x00, 0x00, 0x02];
   *  const comBinData = ActiveXObject.ActiveX_CreateArray(binData, 0x11);
   *  // VT_UI1
   *
   *  const stm = new ActiveXObject('ADODB.Stream');
   *
   *  stm.Open();
   *  stm.Type = 1; // adTypeBinary
   *  stm.Write(comBinData);
   *  stm.SaveToFile(filename, 2);
   *  stm.Close();
   * ```
   *
   * @param array - An array that contains elements of primitive type.
   * @param elementVariantType - A variant type of array elements.
   */
  ActiveX_CreateArray(
    array: unknown[],
    elementVariantType: number,
  ): ActiveXObject;

  /**
   * @param name - The name of `ActiveX` object
   */
  new (name: string): ActiveXObject;
}
