/**
 * The {@link ActiveXObject} interface describes an ActiveX object.
 *
 * ```ts
 *  const xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
 * ```
 *
 * @public
 */
export interface ActiveXObject {
  /**
   * The {@link ActiveXObject.ActiveX_Get} method emulates COM's weird
   * behaviour of property accessors.
   *
   * ```ts
   *  someActiveX.ActiveX_Get('property_name', 'additional_info').DoSmth();
   *  // in COM:
   *  // someActiveX.Item('property_name', 'additional_info').DoSmth();
   * ```
   *
   * @param propName - Name of the property, or it's numeric index
   */
  ActiveX_Get(propName: number | string): unknown;

  /**
   * The {@link ActiveXObject.ActiveX_Set} emulates COM's weird behaviour of
   * property accessors.
   *
   * ```ts
   *  someActiveX.ActiveX_Set('property_name', 'new_value', 'additional_info');
   *  // in COM:
   *  // someActiveX.Item('property_name', 'additional_info') = "new_value";
   * ```
   *
   * @param propName - Name of the property, or it's numeric index
   * @param propValue - Property value
   */
  ActiveX_Set(propName: number | string, propValue: string): unknown;
}
