import { toKebabCase } from "positron-core/src/string";

function lcfirst(str) {
    return str.charAt(0).toLowerCase() + str.substr(1);
}

const source = ({ localName, propTypesName, propTypesLocal, rendererName, rendererLocal, cssLocal }) => (
    `import { Component } from "../Component";

import "${ cssLocal }";
import { ${ propTypesName } } from "${ propTypesLocal }";
import { ${ rendererName } } from "${ rendererLocal }";

export class ${ localName } extends Component {
}

${ localName }.initPropTypes(${ propTypesName }).initDefaultProps({
    renderer: ${ rendererName }
});
`
);

const propTypes = ({ propTypesName, filterPropsName, rendererName, rendererLocal }) => (
    `import { createPropsFilter, isClass } from "positron-core/src/prop-types";
import PropTypes from "prop-types";
import { ElementPropTypes } from "../Element";
import { ${ rendererName } } from "${ rendererLocal }";

export const ${ propTypesName } = Object.assign({}, ElementPropTypes, {
    renderer: isClass(${ rendererName })
});

export const ${ filterPropsName } = createPropsFilter(${ propTypesName });
`
);

const renderer = ({ filterPropsName, rendererName, varName }) => (
    `import { ComponentRenderer } from "../Component";
import { filterElementProps } from "../Element";
import React from "react";

export class ${ rendererName } extends ComponentRenderer {
    static render(${ varName }) {
        return (
            <div { ...filterElementProps(${ varName }.props) } className={ ${ varName }.block() }>
            </div>
        );
    }
}
`
);

const index = ({
    localName, sourceLocal, filterPropsName, propTypesName, propTypesLocal, rendererName, rendererLocal
}) => (
    `export { ${ localName } } from "${ sourceLocal }";
export { ${ propTypesName }, ${ filterPropsName } } from "${ propTypesLocal }";
export { ${ rendererName } } from "${ rendererLocal }";
`
);

const css = ({ cssName }) => (
    `.${ cssName } {
}
`
);

export class Helper {
    constructor(folderName, localName, prefix = "") {
        Object.assign(this, { prefix, folderName, localName });
    }

    full(local) {
        return this.prefix + "/" + this.folderName + "/" + local;
    }

    local(name) {
        return "./" + name;
    }

    get varName() {
        return lcfirst(this.localName);
    }

    get rendererName() {
        return this.localName + "Renderer";
    }

    get sourceLocal() {
        return this.local(this.localName);
    }

    get sourceFull() {
        return this.full(this.localName + ".js");
    }

    get source() {
        return source(this);
    }

    get propTypesName() {
        return this.localName + "PropTypes";
    }

    get propTypesLocal() {
        return this.local(this.propTypesName);
    }

    get propTypesFull() {
        return this.full(this.propTypesName + ".js");
    }

    get filterPropsName() {
        return `filter${ this.localName }Props`;
    }

    get propTypes() {
        return propTypes(this);
    }

    get rendererLocal() {
        return this.local(this.rendererName);
    }

    get rendererFull() {
        return this.full(this.rendererName + ".js");
    }

    get renderer() {
        return renderer(this);
    }

    get indexName() {
        return "index";
    }

    get indexLocal() {
        return this.local(this.indexName);
    }

    get indexFull() {
        return this.full(this.indexName + ".js");
    }

    get index() {
        return index(this);
    }

    get cssName() {
        return toKebabCase(this.localName);
    }

    get cssLocal() {
        return this.local(this.localName + ".scss");
    }

    get cssFull() {
        return this.full(this.localName + ".scss");
    }

    get css() {
        return css(this);
    }

    toString() {
        return this.folderName + "/" + this.localName;
    }

    static parse(name, prefix = "") {
        const re = /^([^/]+\/)?(.+)$/;
        const match = name.match(re);

        return match && new this(match[1] || match[2], match[2], prefix) || null;
    }
}