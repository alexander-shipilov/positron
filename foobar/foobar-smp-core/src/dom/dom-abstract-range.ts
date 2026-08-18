import type { DomNode } from "./dom-node";

/**
 * The {@link DomAbstractRange} abstract interface is the base class upon which
 * all DOM range types are defined. A range is an object that indicates the
 * start and end points of a section of content within the document.
 *
 * @public
 */
export interface DomAbstractRange {
  /**
   * The read-only {@link DomAbstractRange.collapsed} property returns
   * `true` if the range's start position and end position are the same.
   *
   * @remarks
   * A collapsed range is empty (containing no content), and specifies a single
   *   point in a DOM tree. To collapse a range, see the
   *   {@link DomRange.collapse} method.
   */
  readonly collapsed: boolean;

  /**
   * The read-only {@link DomAbstractRange.endContainer} property returns the
   * {@link DomNode} in which the end of the range is located.
   *
   * @remarks
   * To change the end position, use the {@link DomRange.setEnd} method or a
   *   similar one.
   */
  readonly endContainer: DomNode;

  /**
   * The read-only {@link DomAbstractRange.endOffset} property returns the
   * offset into the end node of the range's end position.
   *
   * @remarks
   * To change the end position, use the {@link DomRange.setEnd} method or a
   *   similar one.
   */
  readonly endOffset: number;

  /**
   * The read-only {@link DomAbstractRange.startContainer} property returns the
   * {@link DomNode} in which the start of the range is located.
   *
   * @remarks
   * To change the end position, use the {@link DomRange.setStart} method or a
   *   similar one.
   */
  readonly startContainer: DomNode;

  /**
   * The read-only {@link DomAbstractRange.startOffset} property returns the
   * offset into the start node of the range's start position.
   *
   * @remarks
   * To change the end position, use the {@link DomRange.setStart} method or a
   *   similar one.
   */
  readonly startOffset: number;
}
