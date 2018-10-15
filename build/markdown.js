const markdown = {
    items: {},
    path: `${document.querySelector("script:last-child").getAttribute("src").split("?")[0].split("/").slice(0, -1).join("/")}/`,
    add(id, value) {
        this.items[id] = value;
    },
    get(id) {
        return this.items[id];
    },
};

class Markdown {
    constructor(ele, id, value) {
        let url = "";

        if (ele.hasAttribute("url") && ele.getAttribute("url") !== "") {
            if (url !== "") {
                url += "&";
            } else {
                url += "?";
            }

            url += `url=${ele.getAttribute("url")}`;
        }

        this.frame = document.createElement("div");
        this.frame.innerHTML = `<iframe id="${id}" name="${(ele.getAttribute("name") || "")}" class="markdown-frame ${(ele.getAttribute("class") || "")}" style="${(ele.getAttribute("style") || "")}" src="${markdown.path}markdown.html${url}"></iframe>`;
        this.frame = this.frame.firstChild;

        this.markdown = null;

        this.events = {
            ready: new Event("ready"),
        };

        this.frame.addEventListener("load", () => {
            this.markdown = this.frame.contentWindow.markdown;

            if (value && value !== "") {
                this.markdown.code = value;
            }

            setTimeout(() => {
                ele.dispatchEvent(this.events.ready);
            }, 500);
        });

        ele.parentNode.insertBefore(this.frame, ele);
    }

    get code() {
        return this.markdown.code;
    }

    set code(value) {
        this.markdown.code = value;
    }

    get html() {
        return this.markdown.errors;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const fields = Array.prototype.slice.call(document.getElementsByTagName("input"));

    Object.keys(fields).forEach((key) => {
        if (fields[key].getAttribute("type") === "markdown") {
            const id = (fields[key].id || Date.now());

            markdown.add(id, new Markdown(fields[key], id, fields[key].value));
            fields[key].value = "";
        }
    });

    const elements = Array.prototype.slice.call(document.getElementsByTagName("markdown"));

    Object.keys(elements).forEach((key) => {
        const id = (elements[key].id || Date.now());

        markdown.add(id, new Markdown(elements[key], id, elements[key].innerText));
        fields[key].innerText = "";
    });
});
