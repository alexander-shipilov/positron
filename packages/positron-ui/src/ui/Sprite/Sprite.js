import { Component } from "/ui/Component";

import "./Sprite.scss";
import { SpritePropTypes } from "./SpritePropTypes";
import { SpriteRenderer } from "./SpriteRenderer";

export class Sprite extends Component {
}

Sprite.initPropTypes(SpritePropTypes).initDefaultProps({
    renderer: SpriteRenderer
});
