const toHead = (el) => document.getElementsByTagName("head")[0].appendChild(el);

const source = (src, version) => src + "?" + (version || Date.now().toString(36));

export default class Loader {
    static sprite(src, version) {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest;

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    toHead(document.importNode(xhr.responseXML.documentElement, true));
                    resolve();
                }
            };

            xhr.open("get", source(src, version), true);
            xhr.send();
        });
    }

    static css(href, version) {
        return new Promise((resolve) => {
            const link = toHead(document.createElement("link"));

            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = source(href, version);

            resolve();
        });
    }

    static js(src, version) {
        return new Promise((resolve) => {
            const script = toHead(document.createElement("script"));

            script.async = true;
            script.src = source(src, version);
            script.onload = resolve;
        });
    }

    static wait(timeout) {
        return new Promise((resolve) => {
            setTimeout(resolve, timeout);
        });
    }
}
