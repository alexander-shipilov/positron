import prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";

import lightTheme from "!raw-loader!prismjs/themes/prism.css";
import darkTheme from "!raw-loader!prismjs/themes/prism-okaidia.css";


const styleNode = window.document.createElement("style");

styleNode.setAttribute("data-prism", true);
window.document.head.appendChild(styleNode);

export function setPrismTheme(theme = lightTheme) {
    styleNode.textContent = theme;
}

export default prism;
export { lightTheme, darkTheme };
