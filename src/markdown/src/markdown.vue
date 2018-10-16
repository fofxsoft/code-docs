<template>
    <div id="markdown" :class="{'dark':dark}" v-html="html">
    </div>
</template>

<script>
    import showdown from "showdown";
    import prism from "prismjs";

    export default {
        name: "markdown",
        props: ["url", "dark"],

        data() {
            var me = this;

            return {
                code: null,
                html: null,
                converter: new showdown.Converter({ tables: true }),
            };
        },

        async mounted() {
            const me = this;

            window.markdown = {
                get code() {
                    return me.code;
                },
                set code(value) {
                    me.code = value;
                    me.html = me.converter.makeHtml(me.code);

                    setTimeout(() => {
                        prism.highlightAll();

                        const links = document.getElementsByTagName("a");

                        Object.keys(links).forEach((key) => {
                            const href = links[key].getAttribute("href");

                            if (href && !href.startsWith("#") && !href.startsWith("javascript:")) {
                                links[key].setAttribute("target", "_parent");
                            }
                        });
                    }, 100);
                },
                get html() {
                    return me.html;
                },
            };

            if (this.url) {
                this.$http.get(this.url, { responseType: "text" }).then((response) => {
                    window.markdown.code = response.body;
                });
            }
        }
    };
</script>

<style>
    #markdown {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        line-height: 1.5;
        color: #24292e;
        background: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 16px;
        line-height: 1.5;
        word-wrap: break-word;
    }

    #markdown .pl-c {
        color: #6a737d;
    }

    #markdown .pl-c1,
    #markdown .pl-s .pl-v {
        color: #005cc5;
    }

    #markdown .pl-e,
    #markdown .pl-en {
        color: #6f42c1;
    }

    #markdown .pl-smi,
    #markdown .pl-s .pl-s1 {
        color: #24292e;
    }

    #markdown .pl-ent {
        color: #22863a;
    }

    #markdown .pl-k {
        color: #d73a49;
    }

    #markdown .pl-s,
    #markdown .pl-pds,
    #markdown .pl-s .pl-pse .pl-s1,
    #markdown .pl-sr,
    #markdown .pl-sr .pl-cce,
    #markdown .pl-sr .pl-sre,
    #markdown .pl-sr .pl-sra {
        color: #032f62;
    }

    #markdown .pl-v,
    #markdown .pl-smw {
        color: #e36209;
    }

    #markdown .pl-bu {
        color: #b31d28;
    }

    #markdown .pl-ii {
        color: #fafbfc;
        background-color: #b31d28;
    }

    #markdown .pl-c2 {
        color: #fafbfc;
        background-color: #d73a49;
    }

    #markdown .pl-c2::before {
        content: "^M";
    }

    #markdown .pl-sr .pl-cce {
        font-weight: bold;
        color: #22863a;
    }

    #markdown .pl-ml {
        color: #735c0f;
    }

    #markdown .pl-mh,
    #markdown .pl-mh .pl-en,
    #markdown .pl-ms {
        font-weight: bold;
        color: #005cc5;
    }

    #markdown .pl-mi {
        font-style: italic;
        color: #24292e;
    }

    #markdown .pl-mb {
        font-weight: bold;
        color: #24292e;
    }

    #markdown .pl-md {
        color: #b31d28;
        background-color: #ffeef0;
    }

    #markdown .pl-mi1 {
        color: #22863a;
        background-color: #f0fff4;
    }

    #markdown .pl-mc {
        color: #e36209;
        background-color: #ffebda;
    }

    #markdown .pl-mi2 {
        color: #f6f8fa;
        background-color: #005cc5;
    }

    #markdown .pl-mdr {
        font-weight: bold;
        color: #6f42c1;
    }

    #markdown .pl-ba {
        color: #586069;
    }

    #markdown .pl-sg {
        color: #959da5;
    }

    #markdown .pl-corl {
        text-decoration: underline;
        color: #032f62;
    }

    #markdown .octicon {
        display: inline-block;
        vertical-align: text-top;
        fill: currentColor;
    }

    #markdown a {
        background-color: transparent;
    }

    #markdown a:active,
    #markdown a:hover {
        outline-width: 0;
    }

    #markdown strong {
        font-weight: inherit;
    }

    #markdown strong {
        font-weight: bolder;
    }

    #markdown h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    #markdown img {
        border-style: none;
    }

    #markdown code,
    #markdown kbd,
    #markdown pre {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    #markdown hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    #markdown input {
        font: inherit;
        margin: 0;
    }

    #markdown input {
        overflow: visible;
    }

    #markdown [type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }

    #markdown * {
        box-sizing: border-box;
    }

    #markdown input {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    #markdown a {
        color: #0366d6;
        text-decoration: none;
    }

    #markdown a:hover {
        text-decoration: underline;
    }

    #markdown strong {
        font-weight: 600;
    }

    #markdown hr {
        height: 0;
        margin: 15px 0;
        overflow: hidden;
        background: transparent;
        border: 0;
        border-bottom: 1px solid #dfe2e5;
    }

    #markdown hr::before {
        display: table;
        content: "";
    }

    #markdown hr::after {
        display: table;
        clear: both;
        content: "";
    }

    #markdown table {
        border-spacing: 0;
        border-collapse: collapse;
    }

    #markdown td,
    #markdown th {
        padding: 0;
    }

    #markdown h1,
    #markdown h2,
    #markdown h3,
    #markdown h4,
    #markdown h5,
    #markdown h6 {
        margin-top: 0;
        margin-bottom: 0;
    }

    #markdown h1 {
        font-size: 32px;
        font-weight: 600;
    }

    #markdown h2 {
        font-size: 24px;
        font-weight: 600;
    }

    #markdown h3 {
        font-size: 20px;
        font-weight: 600;
    }

    #markdown h4 {
        font-size: 16px;
        font-weight: 600;
    }

    #markdown h5 {
        font-size: 14px;
        font-weight: 600;
    }

    #markdown h6 {
        font-size: 12px;
        font-weight: 600;
    }

    #markdown p {
        margin-top: 0;
        margin-bottom: 10px;
    }

    #markdown blockquote {
        margin: 0;
    }

    #markdown ul,
    #markdown ol {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    #markdown ol ol,
    #markdown ul ol {
        list-style-type: lower-roman;
    }

    #markdown ul ul ol,
    #markdown ul ol ol,
    #markdown ol ul ol,
    #markdown ol ol ol {
        list-style-type: lower-alpha;
    }

    #markdown dd {
        margin-left: 0;
    }

    #markdown code {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 12px;
    }

    #markdown pre {
        margin-top: 0;
        margin-bottom: 0;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 12px;
    }

    #markdown .octicon {
        vertical-align: text-bottom;
    }

    #markdown .pl-0 {
        padding-left: 0 !important;
    }

    #markdown .pl-1 {
        padding-left: 4px !important;
    }

    #markdown .pl-2 {
        padding-left: 8px !important;
    }

    #markdown .pl-3 {
        padding-left: 16px !important;
    }

    #markdown .pl-4 {
        padding-left: 24px !important;
    }

    #markdown .pl-5 {
        padding-left: 32px !important;
    }

    #markdown .pl-6 {
        padding-left: 40px !important;
    }

    #markdown::before {
        display: table;
        content: "";
    }

    #markdown::after {
        display: table;
        clear: both;
        content: "";
    }

    #markdown>*:first-child {
        margin-top: 0 !important;
    }

    #markdown>*:last-child {
        margin-bottom: 0 !important;
    }

    #markdown a:not([href]) {
        color: inherit;
        text-decoration: none;
    }

    #markdown .anchor {
        float: left;
        padding-right: 4px;
        margin-left: -20px;
        line-height: 1;
    }

    #markdown .anchor:focus {
        outline: none;
    }

    #markdown p,
    #markdown blockquote,
    #markdown ul,
    #markdown ol,
    #markdown dl,
    #markdown table,
    #markdown pre {
        margin-top: 0;
        margin-bottom: 16px;
    }

    #markdown hr {
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
        background-color: #e1e4e8;
        border: 0;
    }

    #markdown blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
    }

    #markdown blockquote>:first-child {
        margin-top: 0;
    }

    #markdown blockquote>:last-child {
        margin-bottom: 0;
    }

    #markdown kbd {
        display: inline-block;
        padding: 3px 5px;
        font-size: 11px;
        line-height: 10px;
        color: #444d56;
        vertical-align: middle;
        background-color: #fafbfc;
        border: solid 1px #c6cbd1;
        border-bottom-color: #959da5;
        border-radius: 3px;
        box-shadow: inset 0 -1px 0 #959da5;
    }

    #markdown h1,
    #markdown h2,
    #markdown h3,
    #markdown h4,
    #markdown h5,
    #markdown h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
    }

    #markdown h1 .octicon-link,
    #markdown h2 .octicon-link,
    #markdown h3 .octicon-link,
    #markdown h4 .octicon-link,
    #markdown h5 .octicon-link,
    #markdown h6 .octicon-link {
        color: #1b1f23;
        vertical-align: middle;
        visibility: hidden;
    }

    #markdown h1:hover .anchor,
    #markdown h2:hover .anchor,
    #markdown h3:hover .anchor,
    #markdown h4:hover .anchor,
    #markdown h5:hover .anchor,
    #markdown h6:hover .anchor {
        text-decoration: none;
    }

    #markdown h1:hover .anchor .octicon-link,
    #markdown h2:hover .anchor .octicon-link,
    #markdown h3:hover .anchor .octicon-link,
    #markdown h4:hover .anchor .octicon-link,
    #markdown h5:hover .anchor .octicon-link,
    #markdown h6:hover .anchor .octicon-link {
        visibility: visible;
    }

    #markdown h1 {
        padding-bottom: 0.3em;
        font-size: 2em;
        border-bottom: 1px solid #eaecef;
    }

    #markdown h2 {
        padding-bottom: 0.3em;
        font-size: 1.5em;
        border-bottom: 1px solid #eaecef;
    }

    #markdown h3 {
        font-size: 1.25em;
    }

    #markdown h4 {
        font-size: 1em;
    }

    #markdown h5 {
        font-size: 0.875em;
    }

    #markdown h6 {
        font-size: 0.85em;
        color: #6a737d;
    }

    #markdown ul,
    #markdown ol {
        padding-left: 2em;
    }

    #markdown ul ul,
    #markdown ul ol,
    #markdown ol ol,
    #markdown ol ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    #markdown li {
        word-wrap: break-all;
    }

    #markdown li>p {
        margin-top: 16px;
    }

    #markdown li+li {
        margin-top: 0.25em;
    }

    #markdown dl {
        padding: 0;
    }

    #markdown dl dt {
        padding: 0;
        margin-top: 16px;
        font-size: 1em;
        font-style: italic;
        font-weight: 600;
    }

    #markdown dl dd {
        padding: 0 16px;
        margin-bottom: 16px;
    }

    #markdown table {
        width: 100%;
        overflow: auto;
    }

    #markdown table th {
        font-weight: 600;
        background: #dfe2e5;
    }

    #markdown table th,
    #markdown table td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
    }

    #markdown table tr {
        background-color: #fff;
        border-top: 1px solid #c6cbd1;
    }

    #markdown table tr:nth-child(2n) {
        background-color: #f6f8fa;
    }

    #markdown img {
        max-width: 100%;
        box-sizing: content-box;
        background-color: #fff;
    }

    #markdown img[align=right] {
        padding-left: 20px;
    }

    #markdown img[align=left] {
        padding-right: 20px;
    }

    #markdown code {
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27,31,35,0.05);
        border-radius: 3px;
    }

    #markdown pre {
        word-wrap: normal;
    }

    #markdown pre>code {
        padding: 0;
        margin: 0;
        font-size: 100%;
        word-break: normal;
        white-space: pre;
        background: transparent;
        border: 0;
    }

    #markdown .highlight {
        margin-bottom: 16px;
    }

    #markdown .highlight pre {
        margin-bottom: 0;
        word-break: normal;
    }

    #markdown .highlight pre,
    #markdown pre {
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px;
    }

    #markdown pre code {
        display: inline;
        max-width: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        line-height: inherit;
        word-wrap: normal;
        background-color: transparent;
        border: 0;
    }

    #markdown .full-commit .btn-outline:not(:disabled):hover {
        color: #005cc5;
        border-color: #005cc5;
    }

    #markdown kbd {
        display: inline-block;
        padding: 3px 5px;
        font: 11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        line-height: 10px;
        color: #444d56;
        vertical-align: middle;
        background-color: #fafbfc;
        border: solid 1px #d1d5da;
        border-bottom-color: #c6cbd1;
        border-radius: 3px;
        box-shadow: inset 0 -1px 0 #c6cbd1;
    }

    #markdown :checked+.radio-label {
        position: relative;
        z-index: 1;
        border-color: #0366d6;
    }

    #markdown .task-list-item {
        list-style-type: none;
    }

    #markdown .task-list-item+.task-list-item {
        margin-top: 3px;
    }

    #markdown .task-list-item input {
        margin: 0 0.2em 0.25em -1.6em;
        vertical-align: middle;
    }

    #markdown hr {
        border-bottom-color: #eee;
    }

    #markdown .token.comment,
    #markdown .token.prolog,
    #markdown .token.doctype,
    #markdown .token.cdata {
        color: #008000; font-style: italic;
    }

    #markdown .token.namespace {
        opacity: .7;
    }

    #markdown .token.string {
        color: #A31515;
    }

    #markdown .token.punctuation,
    #markdown .token.operator {
        color: #393A34;
    }

    #markdown .token.url,
    #markdown .token.symbol,
    #markdown .token.number,
    #markdown .token.boolean,
    #markdown .token.variable,
    #markdown .token.constant,
    #markdown .token.inserted {
        color: #36acaa;
    }

    #markdown .token.atrule,
    #markdown .token.keyword,
    #markdown .token.attr-value,
    #markdown .language-autohotkey .token.selector,
    #markdown .language-json .token.boolean, 
    #markdown .language-json .token.number, 
    #markdown code[class*="language-css"]{
        color: #0000ff;
    }

    #markdown .token.function {
        color: #393A34;
    }

    #markdown .token.deleted,
    #markdown .language-autohotkey .token.tag {
        color: #9a050f;
    }

    #markdown .token.selector,
    #markdown .language-autohotkey .token.keyword {
        color: #00009f;
    }

    #markdown .token.important,
    #markdown .token.bold {
        font-weight: bold;
    }

    #markdown .token.italic {
        font-style: italic;
    }

    #markdown .token.class-name,
    #markdown .language-json .token.property {
        color: #2B91AF;
    }

    #markdown .token.tag,
    #markdown .token.selector {
        color: #800000;
    }

    #markdown .token.attr-name,
    #markdown .token.property,
    #markdown .token.regex,
    #markdown .token.entity {
        color: #ff0000;
    }

    #markdown .token.directive.tag  .tag {
        background: #ffff00;
        color: #393A34;
    }

    #markdown.dark {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        line-height: 1.5;
        color: #bbb;
        background: #2d2d2d;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 16px;
        line-height: 1.5;
        word-wrap: break-word;
    }

    #markdown.dark .pl-c {
        color: #6a737d;
    }

    #markdown.dark .pl-c1,
    #markdown.dark .pl-s .pl-v {
        color: #005cc5;
    }

    #markdown.dark .pl-e,
    #markdown.dark .pl-en {
        color: #6f42c1;
    }

    #markdown.dark .pl-smi,
    #markdown.dark .pl-s .pl-s1 {
        color: #24292e;
    }

    #markdown.dark .pl-ent {
        color: #22863a;
    }

    #markdown.dark .pl-k {
        color: #d73a49;
    }

    #markdown.dark .pl-s,
    #markdown.dark .pl-pds,
    #markdown.dark .pl-s .pl-pse .pl-s1,
    #markdown.dark .pl-sr,
    #markdown.dark .pl-sr .pl-cce,
    #markdown.dark .pl-sr .pl-sre,
    #markdown.dark .pl-sr .pl-sra {
        color: #032f62;
    }

    #markdown.dark .pl-v,
    #markdown.dark .pl-smw {
        color: #e36209;
    }

    #markdown.dark .pl-bu {
        color: #b31d28;
    }

    #markdown.dark .pl-ii {
        color: #fafbfc;
        background-color: #b31d28;
    }

    #markdown.dark .pl-c2 {
        color: #fafbfc;
        background-color: #d73a49;
    }

    #markdown.dark .pl-c2::before {
        content: "^M";
    }

    #markdown.dark .pl-sr .pl-cce {
        font-weight: bold;
        color: #22863a;
    }

    #markdown.dark .pl-ml {
        color: #735c0f;
    }

    #markdown.dark .pl-mh,
    #markdown.dark .pl-mh .pl-en,
    #markdown.dark .pl-ms {
        font-weight: bold;
        color: #005cc5;
    }

    #markdown.dark .pl-mi {
        font-style: italic;
        color: #24292e;
    }

    #markdown.dark .pl-mb {
        font-weight: bold;
        color: #24292e;
    }

    #markdown.dark .pl-md {
        color: #b31d28;
        background-color: #ffeef0;
    }

    #markdown.dark .pl-mi1 {
        color: #22863a;
        background-color: #f0fff4;
    }

    #markdown.dark .pl-mc {
        color: #e36209;
        background-color: #ffebda;
    }

    #markdown.dark .pl-mi2 {
        color: #f6f8fa;
        background-color: #005cc5;
    }

    #markdown.dark .pl-mdr {
        font-weight: bold;
        color: #6f42c1;
    }

    #markdown.dark .pl-ba {
        color: #586069;
    }

    #markdown.dark .pl-sg {
        color: #959da5;
    }

    #markdown.dark .pl-corl {
        text-decoration: underline;
        color: #032f62;
    }

    #markdown.dark .octicon {
        display: inline-block;
        vertical-align: text-top;
        fill: currentColor;
    }

    #markdown.dark a {
        background-color: transparent;
    }

    #markdown.dark a:active,
    #markdown.dark a:hover {
        outline-width: 0;
    }

    #markdown.dark strong {
        font-weight: inherit;
    }

    #markdown.dark strong {
        font-weight: bolder;
    }

    #markdown.dark h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    #markdown.dark img {
        border-style: none;
    }

    #markdown.dark code,
    #markdown.dark kbd,
    #markdown.dark pre {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    #markdown.dark hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    #markdown.dark input {
        font: inherit;
        margin: 0;
    }

    #markdown.dark input {
        overflow: visible;
    }

    #markdown.dark [type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }

    #markdown.dark * {
        box-sizing: border-box;
    }

    #markdown.dark input {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    #markdown.dark a {
        color: #46bcde;
        text-decoration: none;
    }

    #markdown.dark a:hover {
        text-decoration: underline;
    }

    #markdown.dark strong {
        font-weight: 600;
    }

    #markdown.dark hr {
        height: 0;
        margin: 15px 0;
        overflow: hidden;
        background: transparent;
        border: 0;
        border-bottom: 1px solid #dfe2e5;
    }

    #markdown.dark hr::before {
        display: table;
        content: "";
    }

    #markdown.dark hr::after {
        display: table;
        clear: both;
        content: "";
    }

    #markdown.dark table {
        border-spacing: 0;
        border-collapse: collapse;
    }

    #markdown.dark td,
    #markdown.dark th {
        padding: 0;
    }

    #markdown.dark h1,
    #markdown.dark h2,
    #markdown.dark h3,
    #markdown.dark h4,
    #markdown.dark h5,
    #markdown.dark h6 {
        margin-top: 0;
        margin-bottom: 0;
    }

    #markdown.dark h1 {
        font-size: 32px;
        font-weight: 600;
    }

    #markdown.dark h2 {
        font-size: 24px;
        font-weight: 600;
    }

    #markdown.dark h3 {
        font-size: 20px;
        font-weight: 600;
    }

    #markdown.dark h4 {
        font-size: 16px;
        font-weight: 600;
    }

    #markdown.dark h5 {
        font-size: 14px;
        font-weight: 600;
    }

    #markdown.dark h6 {
        font-size: 12px;
        font-weight: 600;
    }

    #markdown.dark p {
        margin-top: 0;
        margin-bottom: 10px;
    }

    #markdown.dark blockquote {
        margin: 0;
    }

    #markdown.dark ul,
    #markdown.dark ol {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    #markdown.dark ol ol,
    #markdown.dark ul ol {
        list-style-type: lower-roman;
    }

    #markdown.dark ul ul ol,
    #markdown.dark ul ol ol,
    #markdown.dark ol ul ol,
    #markdown.dark ol ol ol {
        list-style-type: lower-alpha;
    }

    #markdown.dark dd {
        margin-left: 0;
    }

    #markdown.dark code {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 12px;
    }

    #markdown.dark pre {
        margin-top: 0;
        margin-bottom: 0;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 12px;
    }

    #markdown.dark .octicon {
        vertical-align: text-bottom;
    }

    #markdown.dark .pl-0 {
        padding-left: 0 !important;
    }

    #markdown.dark .pl-1 {
        padding-left: 4px !important;
    }

    #markdown.dark .pl-2 {
        padding-left: 8px !important;
    }

    #markdown.dark .pl-3 {
        padding-left: 16px !important;
    }

    #markdown.dark .pl-4 {
        padding-left: 24px !important;
    }

    #markdown.dark .pl-5 {
        padding-left: 32px !important;
    }

    #markdown.dark .pl-6 {
        padding-left: 40px !important;
    }

    #markdown.dark::before {
        display: table;
        content: "";
    }

    #markdown.dark::after {
        display: table;
        clear: both;
        content: "";
    }

    #markdown.dark>*:first-child {
        margin-top: 0 !important;
    }

    #markdown.dark>*:last-child {
        margin-bottom: 0 !important;
    }

    #markdown.dark a:not([href]) {
        color: inherit;
        text-decoration: none;
    }

    #markdown.dark .anchor {
        float: left;
        padding-right: 4px;
        margin-left: -20px;
        line-height: 1;
    }

    #markdown.dark .anchor:focus {
        outline: none;
    }

    #markdown.dark p,
    #markdown.dark blockquote,
    #markdown.dark ul,
    #markdown.dark ol,
    #markdown.dark dl,
    #markdown.dark table,
    #markdown.dark pre {
        margin-top: 0;
        margin-bottom: 16px;
    }

    #markdown.dark hr {
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
        background-color: #353535;
        border: 0;
    }

    #markdown.dark blockquote {
        padding: 0 1em;
        color: #969696;
        border-left: 0.25em solid #353535;
    }

    #markdown.dark blockquote>:first-child {
        margin-top: 0;
    }

    #markdown.dark blockquote>:last-child {
        margin-bottom: 0;
    }

    #markdown.dark kbd {
        display: inline-block;
        padding: 3px 5px;
        font-size: 11px;
        line-height: 10px;
        color: #444d56;
        vertical-align: middle;
        background-color: #fafbfc;
        border: solid 1px #c6cbd1;
        border-bottom-color: #959da5;
        border-radius: 3px;
        box-shadow: inset 0 -1px 0 #959da5;
    }

    #markdown.dark h1,
    #markdown.dark h2,
    #markdown.dark h3,
    #markdown.dark h4,
    #markdown.dark h5,
    #markdown.dark h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
    }

    #markdown.dark h1 .octicon-link,
    #markdown.dark h2 .octicon-link,
    #markdown.dark h3 .octicon-link,
    #markdown.dark h4 .octicon-link,
    #markdown.dark h5 .octicon-link,
    #markdown.dark h6 .octicon-link {
        color: #8a8a8a;
        vertical-align: middle;
        visibility: hidden;
    }

    #markdown.dark h1:hover .anchor,
    #markdown.dark h2:hover .anchor,
    #markdown.dark h3:hover .anchor,
    #markdown.dark h4:hover .anchor,
    #markdown.dark h5:hover .anchor,
    #markdown.dark h6:hover .anchor {
        text-decoration: none;
    }

    #markdown.dark h1:hover .anchor .octicon-link,
    #markdown.dark h2:hover .anchor .octicon-link,
    #markdown.dark h3:hover .anchor .octicon-link,
    #markdown.dark h4:hover .anchor .octicon-link,
    #markdown.dark h5:hover .anchor .octicon-link,
    #markdown.dark h6:hover .anchor .octicon-link {
        visibility: visible;
    }

    #markdown.dark h1 {
        padding-bottom: 0.3em;
        font-size: 2em;
        border-bottom: 1px solid #353535;
    }

    #markdown.dark h2 {
        padding-bottom: 0.3em;
        font-size: 1.5em;
        border-bottom: 1px solid #353535;
    }

    #markdown.dark h3 {
        font-size: 1.25em;
    }

    #markdown.dark h4 {
        font-size: 1em;
    }

    #markdown.dark h5 {
        font-size: 0.875em;
    }

    #markdown.dark h6 {
        font-size: 0.85em;
        color: #6a737d;
    }

    #markdown.dark ul,
    #markdown.dark ol {
        padding-left: 2em;
    }

    #markdown.dark ul ul,
    #markdown.dark ul ol,
    #markdown.dark ol ol,
    #markdown.dark ol ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    #markdown.dark li {
        word-wrap: break-all;
    }

    #markdown.dark li>p {
        margin-top: 16px;
    }

    #markdown.dark li+li {
        margin-top: 0.25em;
    }

    #markdown.dark dl {
        padding: 0;
    }

    #markdown.dark dl dt {
        padding: 0;
        margin-top: 16px;
        font-size: 1em;
        font-style: italic;
        font-weight: 600;
    }

    #markdown.dark dl dd {
        padding: 0 16px;
        margin-bottom: 16px;
    }

    #markdown.dark table {
        width: 100%;
        overflow: auto;
    }

    #markdown.dark table th,
    #markdown.dark table td {
        padding: 6px 13px;
        border: 1px solid #353535;
        color: rgb(224, 224, 224);
    }

    #markdown.dark table th {
        font-weight: 600;
        background: #353535;
        color: #bbb;
    }

    #markdown.dark table tr {
        background-color: #2d2d2d;
        border-top: 1px solid #353535;
    }

    #markdown.dark table tr:nth-child(2n) {
        background-color: #2e2e2e;
    }

    #markdown.dark img {
        max-width: 100%;
        box-sizing: content-box;
        background-color: #fff;
    }

    #markdown.dark img[align=right] {
        padding-left: 20px;
    }

    #markdown.dark img[align=left] {
        padding-right: 20px;
    }

    #markdown.dark code {
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27,31,35,0.05);
        border-radius: 3px;
    }

    #markdown.dark pre {
        word-wrap: normal;
    }

    #markdown.dark pre>code {
        padding: 0;
        margin: 0;
        font-size: 100%;
        word-break: normal;
        white-space: pre;
        background: transparent;
        border: 0;
    }

    #markdown.dark .highlight {
        margin-bottom: 16px;
    }

    #markdown.dark .highlight pre {
        margin-bottom: 0;
        word-break: normal;
    }

    #markdown.dark .highlight pre,
    #markdown.dark pre {
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #353535;
        border-radius: 3px;
    }

    #markdown.dark pre code {
        display: inline;
        max-width: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        line-height: inherit;
        word-wrap: normal;
        background-color: transparent;
        border: 0;
    }

    #markdown.dark .full-commit .btn-outline:not(:disabled):hover {
        color: #005cc5;
        border-color: #005cc5;
    }

    #markdown.dark kbd {
        display: inline-block;
        padding: 3px 5px;
        font: 11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        line-height: 10px;
        color: #444d56;
        vertical-align: middle;
        background-color: #fafbfc;
        border: solid 1px #d1d5da;
        border-bottom-color: #c6cbd1;
        border-radius: 3px;
        box-shadow: inset 0 -1px 0 #c6cbd1;
    }

    #markdown.dark :checked+.radio-label {
        position: relative;
        z-index: 1;
        border-color: #0366d6;
    }

    #markdown.dark .task-list-item {
        list-style-type: none;
    }

    #markdown.dark .task-list-item+.task-list-item {
        margin-top: 3px;
    }

    #markdown.dark .task-list-item input {
        margin: 0 0.2em 0.25em -1.6em;
        vertical-align: middle;
    }

    #markdown.dark hr {
        border-bottom-color: #353535;
    }

    #markdown.dark code[class*="language-"],
    #markdown.dark pre[class*="language-"] {
    	color: #c5c8c6;
    	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
    	direction: ltr;
    	text-align: left;
    	white-space: pre;
    	word-spacing: normal;
    	word-break: normal;
    	line-height: 1.5;

    	-moz-tab-size: 4;
    	-o-tab-size: 4;
    	tab-size: 4;

    	-webkit-hyphens: none;
    	-moz-hyphens: none;
    	-ms-hyphens: none;
    	hyphens: none;
    }

    #markdown.dark pre[class*="language-"] {
    	padding: 1em;
    	margin: .5em 0;
    	overflow: auto;
    	border-radius: 0.3em;
    }

    #markdown.dark :not(pre) > code[class*="language-"],
    #markdown.dark pre[class*="language-"] {
    	background: #353535;
    }

    #markdown.dark :not(pre) > code[class*="language-"] {
    	padding: .1em;
    	border-radius: .3em;
    }

    #markdown.dark .token.comment,
    #markdown.dark .token.prolog,
    #markdown.dark .token.doctype,
    #markdown.dark .token.cdata {
    	color: #7C7C7C;
    }

    #markdown.dark .token.punctuation {
    	color: #c5c8c6;
    }

    #markdown.dark .namespace {
    	opacity: .7;
    }

    #markdown.dark .token.property,
    #markdown.dark .token.keyword,
    #markdown.dark .token.tag {
        color: #96CBFE;
    }

    #markdown.dark .token.class-name {
    	color: #FFFFB6;
    	text-decoration: underline;
    }

    #markdown.dark .token.boolean,
    #markdown.dark .token.constant {
        color: #99CC99;
    }

    #markdown.dark .token.symbol,
    #markdown.dark .token.deleted {
    	color: #f92672;
    }

    #markdown.dark .token.number {
    	color: #FF73FD;
    }

    #markdown.dark .token.selector,
    #markdown.dark .token.attr-name,
    #markdown.dark .token.string,
    #markdown.dark .token.char,
    #markdown.dark .token.builtin,
    #markdown.dark .token.inserted {
    	color: #A8FF60;
    }

    #markdown.dark .token.variable {
    	color: #C6C5FE;
    }

    #markdown.dark .token.operator {
        color: #EDEDED;
    }

    #markdown.dark .token.entity {
        color: #FFFFB6;
    }

    #markdown.dark .token.url {
        color: #96CBFE;
    }

    #markdown.dark .language-css .token.string,
    #markdown.dark .style .token.string {
    	color: #87C38A;
    }

    #markdown.dark .token.atrule,
    #markdown.dark .token.attr-value {
        color: #F9EE98;
    }

    #markdown.dark .token.function {
    	color: #DAD085;
    }

    #markdown.dark .token.regex {
        color: #E9C062;
    }

    #markdown.dark .token.important {
    	color: #fd971f;
    }

    #markdown.dark .token.important,
    #markdown.dark .token.bold {
    	font-weight: bold;
    }

    #markdown.dark .token.italic {
    	font-style: italic;
    }

    #markdown.dark .token.entity {
    	cursor: help;
    }
</style>
