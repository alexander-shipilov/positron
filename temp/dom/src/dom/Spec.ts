import { assert } from "../utils/assert";
import { isNonNull } from "../utils/isNonNull";
import { tbd } from "../utils/tbd";
import { Attr } from "./attribute/Attr";
import { Comment } from "./Comment";
import { Document } from "./Document";
import { DocumentFragment } from "./DocumentFragment";
import { DocumentType } from "./DocumentType";
import { DOMException } from "./DOMException";
import { DOMExceptionName } from "./DOMExceptionName";
import { Element } from "./element/Element";
import { attributeList } from "./element/Element.symbols";
import { isCustom } from "./element/isCustom";
import { isElement } from "./element/isElement";
import { isCharacterData } from "./isCharacterData";
import { isDocument } from "./isDocument";
import { isDocumentFragment } from "./isDocumentFragment";
import { isDocumentType } from "./isDocumentType";
import { Node } from "./node/Node";
import { ProcessingInstruction } from "./ProcessingInstruction";
import { Range } from "./range/Range";
import { isText } from "./text/isText";
import { Text } from "./text/Text";
import { followingSiblings } from "./tree/followingSiblings";
import { isHostIncludingInclusiveAncestor } from "./tree/isHostIncludingInclusiveAncestor";
import { isInclusiveDescendant } from "./tree/isInclusiveDescendant";
import { precedingSiblings } from "./tree/precedingSiblings";
import { shadowIncludingInclusiveDescendants } from "./tree/shadowIncludingInclusiveDescendants";

export abstract class Spec {
  abstract liveRanges: Range[];

  /**
   * https://dom.spec.whatwg.org/#concept-node-adopt
   *
   * To adopt a `node` into a `document`, run these steps:
   *
   * @param node - Node
   * @param document - Document
   */
  adopt(node: Node, document: Document): void {
    // 1. Let `oldDocument` be `node`’s [node document].
    const { nodeDocument: oldDocument } = node;

    // 2. If `node`’s [parent] is non-null, then [remove] `node`.
    if (node.parent !== null) {
      this.remove(node);
    }

    // 3. If `document` is not `oldDocument`, then:
    if (document !== oldDocument) {
      const inclusiveDescendants = [
        ...shadowIncludingInclusiveDescendants(node),
      ];

      // 3.1. For each `inclusiveDescendant` in `node`’s
      // [shadow-including inclusive descendants]:
      inclusiveDescendants.forEach((inclusiveDescendant: Node) => {
        // 3.1.1. Set `inclusiveDescendant`’s [node document] to `document`.
        inclusiveDescendant.nodeDocument = document;

        // 3.1.2. If `inclusiveDescendant` is an [element], then set the
        // `node` document of each `attribute` in `inclusiveDescendant`’s
        // [attribute list] to `document`.
        if (isElement(inclusiveDescendant)) {
          inclusiveDescendant[attributeList].forEach((attribute: Node) => {
            attribute.nodeDocument = document;
          });
        }
      });

      // 3.2. For each `inclusiveDescendant` in `node`’s
      // [shadow-including inclusive descendants] that is [custom],
      // [enqueue a custom element callback reaction]
      // with `inclusiveDescendant`, `callback name` "adoptedCallback", and
      // an argument list containing `oldDocument` and `document`.
      inclusiveDescendants.forEach((inclusiveDescendant: Node) => {
        if (isCustom(inclusiveDescendant)) {
          this.enqueueCustomElementCallbackReaction(
            inclusiveDescendant,
            "adoptedCallback",
            oldDocument,
            document
          );
        }
      });

      // 3.3 For each `inclusiveDescendant` in `node`’s
      // [shadow-including inclusive descendants], in shadow-including tree
      // order, run the [adopting steps] with `inclusiveDescendant` and
      // `oldDocument`.
      inclusiveDescendants.forEach((inclusiveDescendant: Node) => {
        inclusiveDescendant.adoptingStep?.forEach((adoptingStep) =>
          adoptingStep(inclusiveDescendant, oldDocument)
        );
      });
    }
  }

  /**
   * https://dom.spec.whatwg.org/#concept-node-clone
   *
   * To clone a `node`, with an optional `document` and `clone children`
   * flag, run these steps:
   *
   * @param node - node
   * @param document - document
   * @param cloneChildren - clone children flag
   */
  clone<T extends Node>(
    node: T,
    // 1. If `document` is not given, let `document` be node’s [node document].
    document: Document = node.nodeDocument,
    cloneChildren = false
  ): T {
    let copy: Node;

    // 2. If node is an element, then:
    if (isElement(node)) {
      // 2.1. Let `copy` be the result of [creating an element], given
      // `document`, `node`’s [local name], `node`’s [namespace], `node`’s
      // [namespace prefix], and `node`’s [is value], with the synchronous
      // `custom elements` flag unset.
      const elementCopy = (copy = this.createElement(
        document,
        node.localName,
        node.namespace,
        node.namespacePrefix,
        node.is,
        false
      ));

      // 2.2. For each `attribute` in `node`’s [attribute list]:
      elementCopy[attributeList].forEach((attribute: Attr) => {
        // 2.2.1. Let `copyAttribute` be a [clone] of `attribute`.
        const copyAttribute = this.clone(attribute);

        // 2.2.2. [Append] `copyAttribute` to `copy`.
        this.appendAttribute(copyAttribute, copy as Element);
      });
    }
    // 3. Otherwise, let `copy` be a node that implements the same interfaces
    // as `node`, and fulfills these additional requirements, switching on the
    // interface node implements:
    else {
      // Document
      // Set `copy`’s [encoding], [content type], [URL], [origin], [type], and
      // [mode] to those of `node`.
      if (isDocument(node)) {
        const documentCopy = (copy = this.createDocument());

        documentCopy.encoding = node.encoding;
        documentCopy.contentType = node.contentType;
        documentCopy.URL = node.URL;
        documentCopy.origin = node.origin;
        documentCopy.type = node.type;
        documentCopy.mode = node.mode;
      }
      // DocumentType
      // Set `copy`’s [name], [public ID], and [system ID] to those of `node`.
      else if (isDocumentType(node)) {
        const documentTypeCopy = (copy = this.createDocumentType());

        documentTypeCopy.name = node.name;
        documentTypeCopy.publicID = node.publicID;
        documentTypeCopy.systemID = node.systemID;
      }
      // Attr
      // Set `copy`’s [namespace], [namespace prefix],
      // [local name], and [value] to those of `node`.
      else if (node instanceof Attr) {
        const attrCopy = (copy = this.createAttr());

        attrCopy.namespace = node.namespace;
        attrCopy.namespacePrefix = node.namespacePrefix;
        attrCopy.localName = node.localName;
        attrCopy.value = node.value;
      }
      // Text
      // Comment
      // Set `copy`’s [data] to that of `node`.
      else if (isText(node)) {
        const textCopy = (copy = this.createText());

        textCopy.data = node.data;
      } else if (node instanceof Comment) {
        const commentCopy = (copy = this.createComment());

        commentCopy.data = node.data;
      }
      // ProcessingInstruction
      // Set `copy`’s `target` and `data` to those of `node`.
      else if (node instanceof ProcessingInstruction) {
        const processingInstructionCopy = (copy =
          this.createProcessingInstruction());

        processingInstructionCopy.target = node.target;
        processingInstructionCopy.data = node.data;
      } else {
        copy = this.crateNodeFrom(node);
      }
    }

    // 4. Set `copy`’s [node document] and `document` to `copy`, if `copy` is a
    // document, and set `copy`’s [node document] to `document` otherwise.
    if (isDocument(copy)) {
      copy.nodeDocument = document = copy;
    } else {
      node.nodeDocument = document;
    }

    // 5. Run any [cloning steps] defined for `node` in other applicable
    // specifications and pass `copy`, `node`, `document` and the `clone
    // children` flag if set, as parameters.
    node.cloningStep?.forEach((cloningStep) =>
      cloningStep(copy, node, document, cloneChildren)
    );

    // 6. If the `clone children` flag is set, [clone] all the [children] of
    // `node` and [append] them to `copy`, with `document` as specified and
    // the `clone children` flag being set.
    if (cloneChildren) {
      node.children.forEach((child) => {
        this.append(this.clone(child, document, true), copy);
      });
    }

    // 7. Return copy.
    return node;
  }

  /**
   * https://dom.spec.whatwg.org/#concept-node-pre-remove
   *
   * To pre-remove a `child` from a `parent`, run these steps:
   *
   * @param child - child
   * @param parent - parent
   */
  preRemove<T extends Node>(child: T, parent: Node): T {
    // 1. If `child`’s parent is not `parent`, then throw a "NotFoundError"
    // DOMException.
    if (child.parent !== parent) {
      throw new DOMException("tbd", DOMExceptionName.NotFoundError);
    }

    // 2. Remove child.
    this.remove(child);

    // 3. Return child.
    return child;
  }

  /**
   * https://dom.spec.whatwg.org/#concept-node-remove
   *
   * To remove a `node`, with an optional `suppress observers` flag, run these
   * steps:
   *
   * @param node - node
   * @param suppressObservers - suppress observers flag
   */
  remove(node: Node, suppressObservers = false): void {
    // 1. Let `parent` be node’s parent.
    // 2. Assert: `parent` is non-null.
    const parent = assert(node.parent, isNonNull);

    // 3. Let index be `node`’s [index].
    const { index } = node;

    // 4. For each [live range] whose [start node] is an [inclusive descendant]
    // of `node`, set its [start] to (`parent`, `index`).
    this.liveRanges
      .filter(({ startNode }: Range) => isInclusiveDescendant(startNode, node))
      .forEach((range) => {
        range.start = [parent, index];
      });

    // 5. For each [live range] whose [end node] is an [inclusive descendant] of
    // `node`, set its [end] to (`parent`, `index`).
    this.liveRanges
      .filter(({ endNode }: Range) => isInclusiveDescendant(endNode, node))
      .forEach((range) => {
        range.start = [parent, index];
      });

    // 6. For each [live range] whose [start node] is `parent` and
    // [start offset] is greater than `index`, decrease its [start offset] by 1.
    this.liveRanges
      .filter(
        ({ startNode, startOffset }: Range) =>
          startNode === parent && startOffset > index
      )
      .forEach((range) => {
        range.start[1] = range.start[1] - 1;
      });

    // 7. For each [live range] whose [end node] is `parent` and [end offset] is
    // greater than `index`, decrease its [end offset] by 1.
    this.liveRanges
      .filter(
        ({ endNode, endOffset }: Range) =>
          endNode === parent && endOffset > index
      )
      .forEach((range) => {
        range.end[1] = range.end[1] - 1;
      });

    // 8. For each [NodeIterator] object `iterator` whose [root]’s [node
    // document] is `node`’s [node document], run the [NodeIterator]
    // [pre-removing steps] given `node` and `iterator`.
    tbd();

    // 9. Let `oldPreviousSibling` be `node`’s [previous sibling].
    const oldPreviousSibling = node.previousSibling;

    // 10. Let `oldNextSibling` be node’s [next sibling].
    const oldNextSibling = node.nextSibling;

    // 11. [Remove] `node` from its `parent`’s [children].
    parent.children.remove((child) => child === node);

    // 12. If `node` is [assigned], then run [assign slottables] for `node`’s
    // [assigned slot].

    // 13. If parent’s root is a shadow root, and parent is a slot whose
    // assigned nodes is the empty list, then run signal a slot change for
    // parent.

    // 14. If node has an inclusive descendant that is a slot, then:

    // 14.1. Run assign slottables for a tree with parent’s root.

    // 14.2. Run assign slottables for a tree with node.

    // 15. Run the removing steps with node and parent.

    // 16. Let isParentConnected be parent’s connected.

    // 17. If node is custom and isParentConnected is true, then enqueue a
    // custom element callback reaction with node, callback name
    // "disconnectedCallback", and an empty argument list.

    // It is intentional for now that custom elements do not get parent passed.
    // This might change in the future if there is a need.

    // 18. For each shadow-including descendant descendant of node, in
    // shadow-including tree order, then:

    // 18.1. Run the removing steps with descendant.

    // 18.2. If descendant is custom and isParentConnected is true, then
    // enqueue a custom element callback reaction with descendant, callback
    // name "disconnectedCallback", and an empty argument list.

    // 19. For each inclusive ancestor inclusiveAncestor of parent, and then
    // for each registered of inclusiveAncestor’s registered observer list, if
    // registered’s options["subtree"] is true, then append a new transient
    // registered observer whose observer is registered’s observer, options is
    // registered’s options, and source is registered to node’s registered
    // observer list.

    // 20. If suppress observers flag is unset, then queue a tree mutation
    // record for parent with « », « node », oldPreviousSibling, and
    // oldNextSibling.

    // 21. Run the children changed steps for parent.
  }

  /**
   * To [replace] a `child` with `node` within a `parent`, run these steps:
   */
  replace<T extends Node>(child: T, node: Node, parent: Node | null): T {
    // 1. If `parent` is not a [Document], [DocumentFragment], or [Element]
    // node, then throw a "HierarchyRequestError" [DOMException].
    if (
      !isDocument(parent) &&
      !isDocumentFragment(parent) &&
      !isElement(parent)
    ) {
      throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
    }

    // 2. If `node` is a [host-including inclusive ancestor] of `parent`, then
    // throw a "HierarchyRequestError" [DOMException].
    if (isHostIncludingInclusiveAncestor(node, parent)) {
      throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
    }

    // 3. If `child`’s [parent] is not `parent`, then throw a "NotFoundError"
    // DOMException.
    if (child.parent !== parent) {
      throw new DOMException("tbd", DOMExceptionName.NotFoundError);
    }

    // 4. If `node` is not a [DocumentFragment], [DocumentType], [Element], or
    // [CharacterData] node, then throw a "HierarchyRequestError" DOMException.
    if (
      !isDocumentFragment(node) &&
      !isDocumentType(node) &&
      !isElement(node) &&
      !isCharacterData(node)
    ) {
      throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
    }

    // 5. If either `node` is a [Text] node and `parent` is a [document], or
    // `node` is a [doctype] and `parent` is not a [document], then throw a
    // "HierarchyRequestError" DOMException.
    if (isDocument(parent) ? isText(node) : isDocumentType(node)) {
      throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
    }

    // 6.  If `parent` is a [document], and any of the statements below,
    // switched on the interface `node` implements, are `true`, then throw a
    // "HierarchyRequestError" DOMException.
    if (isDocument(parent)) {
      // [DocumentFragment]
      if (isDocumentFragment(node)) {
        const nodeChildren = [...node.children];
        const nodeElements = nodeChildren.filter(isElement);

        // If `node` has more than one [element] [child] or has a [Text] node
        // [child].
        if (nodeElements.length > 1) {
          throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
        }

        if (nodeChildren.findIndex(isText) !== -1) {
          throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
        }

        // Otherwise, if `node` has one [element] child
        if (nodeElements.length === 1) {
          // and either `parent` has an [element] child that is not `child`
          if (
            [...parent.children].some(
              (parentChild) => parentChild !== child && isElement(parentChild)
            )
          ) {
            throw new DOMException(
              "tbd",
              DOMExceptionName.HierarchyRequestError
            );
          }

          // or a [doctype]  is following `child`
          if ([...followingSiblings(child)].some(isDocumentType)) {
            throw new DOMException(
              "tbd",
              DOMExceptionName.HierarchyRequestError
            );
          }
        }
      }
      // [Element]
      else if (isElement(node)) {
        // `parent` has an [element] child that is not `child`
        if (
          [...parent.children].some(
            (parentChild) => parentChild !== child && isElement(parentChild)
          )
        ) {
          throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
        }

        //  or a [doctype] is following `child`.
        if ([...followingSiblings(child)].some(isDocumentType)) {
          throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
        }
      }
      // [DocumentType]
      else if (isDocumentType(node)) {
        // `parent` has a [doctype] child that is not `child`
        if (
          [...parent.children].some(
            (parentChild) =>
              parentChild !== child && isDocumentType(parentChild)
          )
        ) {
          throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
        }

        // or an [element] is preceding `child`
        if ([...precedingSiblings(child)].some(isElement)) {
          throw new DOMException("tbd", DOMExceptionName.HierarchyRequestError);
        }
      }
      // The above statements differ from the [pre-insert] algorithm.
    }

    // 7. Let `referenceChild` be `child`’s [next sibling].
    let referenceChild = child.nextSibling;

    // 8. If `referenceChild` is `node`, then set `referenceChild` to
    // `node`’s [next sibling].
    if (referenceChild === node) {
      referenceChild = node.nextSibling;
    }

    // 9. Let `previousSibling` be `child`’s [previous sibling].
    const previousSibling = child.previousSibling;

    // 10. Let `removedNodes` be the empty set.
    let removedNodes: Node[] = [];

    // 11. If `child`’s [parent] is non-null, then:
    if (child.parent !== null) {
      // 11.1. Set `removedNodes` to « child ».
      removedNodes = [child];

      // 11.2. [Remove] `child` with the `suppress observers` flag set.
      this.remove(child, true);
      // The above can only be false if child is node.
    }

    // 12. Let `nodes` be `node`’s [children] if `node` is a [DocumentFragment]
    // node; otherwise « `node` ».
    const nodes = isDocumentFragment(node) ? [...node.children] : [node];

    // 13. [Insert] `node` into `parent` before `referenceChild` with the
    // `suppress observers` flag set.
    this.insert(node, parent, referenceChild, true);

    // 14. [Queue a tree mutation record] for `parent` with `nodes`,
    // `removedNodes`, `previousSibling`, and `referenceChild`.
    this.queueTreeMutationRecord(
      parent,
      nodes,
      removedNodes,
      previousSibling,
      referenceChild
    );

    // 15. Return `child`.
    return child;
  }

  /**
   *
   */
  abstract append(node: Node, parent: Node): void;

  /**
   * https://dom.spec.whatwg.org/#concept-element-attributes-append
   *
   * To append an attribute `attribute` to an element `element`, run these
   * steps:
   */
  abstract appendAttribute(attribute: Attr, element: Element): void;

  abstract crateNodeFrom<T extends Node>(node: T): T;

  abstract createAttr(): Attr;

  abstract createComment(): Comment;

  abstract createDocument(): Document;

  abstract createDocumentFragment(): DocumentFragment;

  abstract createDocumentType(): DocumentType;

  /**
   * https://dom.spec.whatwg.org/#concept-create-element
   *
   * To create an element, given a `document`, `localName`, `namespace`, and
   * optional
   * `prefix`, `is`, and `synchronous custom elements` flag, run these steps:
   *
   * @param document - document
   * @param localName - local name
   * @param namespace - namespace
   * @param prefix - prefix
   * @param is - is
   * @param synchronousCustomElements - synchronous custom elements flag
   */
  abstract createElement(
    document: Document,
    localName: string,
    namespace: string,
    prefix: string | null,
    is: string | null,
    synchronousCustomElements: boolean
  ): Element;

  abstract createProcessingInstruction(): ProcessingInstruction;

  abstract createText(): Text;

  abstract enqueueCustomElementCallbackReaction(
    node: Element,
    callbackName: string,
    ...args: unknown[]
  ): void;

  abstract insert(
    node: Node,
    parent: Node,
    child: Node | null,
    suppressObservers: boolean
  ): void;

  /**
   * https://dom.spec.whatwg.org/#queue-a-tree-mutation-record
   *
   * To [queue a tree mutation record] for `target` with `addedNodes`,
   * `removedNodes`,
   * `previousSibling`, and `nextSibling`, run these steps:
   */
  abstract queueTreeMutationRecord(
    target: Node,
    addedNodes: Node[],
    removedNodes: Node[],
    previousSibling: Node | null,
    nextSibling: Node | null
  ): void;
}
