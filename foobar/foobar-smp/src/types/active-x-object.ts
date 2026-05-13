/**
 * The {@link ActiveXObject} class creates a new `ActiveX` object.
 *
 * @example
 * ```ts
 *  const xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
 * ```
 *
 * @public
 */
export declare class ActiveXObject {
  /**
   * The {@link ActiveXObject.ActiveX_CreateArray} static method of the
   * {@link ActiveXObject} class creates an instance of {@link ActiveXObject}
   * that contains an object of type (VT_ARRAY | SOME_TYPE).
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
   *  stm.Type = 1; //adTypeBinary
   *  stm.Write(comBinData);
   *  stm.SaveToFile(filename, 2);
   *  stm.Close();
   * ```
   *
   * @param array - An array that contains elements of primitive type.
   * @param elementVariantType - A variant type of array elements.
   */
  public static ActiveX_CreateArray(
    array: unknown[],
    elementVariantType: number,
  ): ActiveXObject;

  /**
   * @param name - The name of `ActiveX` object
   */
  public constructor(name: string);

  /**
   * The {@link ActiveXObject.ActiveX_Get} method emulates COM's weird
   * behaviour of property accessors.
   *
   * @example
   * ```ts
   *  someActiveX.ActiveX_Get('property_name', 'additional_info').DoSmth();
   *  // in COM:
   *  // someActiveX.Item('property_name', 'additional_info').DoSmth();
   * ```
   *
   * @param propName - Name of the property, or it's numeric index
   */
  public ActiveX_Get(propName: number | string): unknown;

  /**
   * The {@link ActiveXObject.ActiveX_Set} emulates COM's weird behaviour of
   * property accessors.
   *
   * @example
   * ```ts
   *  someActiveX.ActiveX_Set('property_name', 'new_value', 'additional_info');
   *  // in COM:
   *  // someActiveX.Item('property_name', 'additional_info') = "new_value";
   * ```
   *
   * @param propName - Name of the property, or it's numeric index
   * @param propValue - Property value
   */
  public ActiveX_Set(propName: number | string, propValue: string): unknown;
}
