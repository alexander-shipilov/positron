import marked from "marked";
import prism from "./prism";

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    renderer: new marked.Renderer(),
    highlight(code, lang) {
        return prism.highlight(code, prism.languages.jsx);
    }
});
