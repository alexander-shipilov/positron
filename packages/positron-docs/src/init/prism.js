import lightTheme from "!raw-loader!prismjs/themes/prism.css";

import prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";

const styleNode = window.document.createElement("style");

styleNode.textContent = lightTheme;
window.document.head.appendChild(styleNode);

export default prism;
