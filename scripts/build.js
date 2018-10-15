const {
    copyFileSync,
    existsSync,
    mkdirSync,
    readdir,
    unlinkSync,
} = require("fs");

const { join } = require("path");
const { spawnSync } = require("child_process");

console.log("\x1b[36m%s\x1b[0m", "Building Markdown"); /* eslint-disable-line no-console */

spawnSync("npm", ["run", "build"], {
    env: process.env,
    cwd: "./src/markdown/",
    stdio: "inherit",
});

console.log("\x1b[36m%s\x1b[0m", "Deploying Markdown"); /* eslint-disable-line no-console */
console.log("\r\n"); /* eslint-disable-line no-console */

if (!existsSync("./build/")) {
    mkdirSync("./build/");
}

if (!existsSync("./build/css/")) {
    mkdirSync("./build/css/");
}

readdir("./build/css/", (err, files) => {
    if (err) {
        throw (err);
    }

    for (let i = 0; i < files.length; i += 1) {
        unlinkSync(join("./build/css/", files[i]));
    }
});

if (!existsSync("./build/js/")) {
    mkdirSync("./build/js/");
}

readdir("./build/js/", (err, files) => {
    if (err) {
        throw (err);
    }

    for (let i = 0; i < files.length; i += 1) {
        unlinkSync(join("./build/js/", files[i]));
    }
});

if (existsSync("./build/markdown.css")) {
    unlinkSync("./build/markdown.css");
}

if (existsSync("./build/markdown.js")) {
    unlinkSync("./build/markdown.js");
}

if (existsSync("./build/markdown.html")) {
    unlinkSync("./build/markdown.html");
}

readdir("./src/markdown/dist/css/", (err, files) => {
    if (err) {
        throw (err);
    }

    for (let i = 0; i < files.length; i += 1) {
        copyFileSync(join("./src/markdown/dist/css/", files[i]), join("./build/css/", files[i]));
        console.log("\x1b[32m%s\x1b[0m", `${join("./src/markdown/dist/css/", files[i])} -> ${join("./build/css/", files[i])}`); /* eslint-disable-line no-console */
    }
});

readdir("./src/markdown/dist/js/", (err, files) => {
    if (err) {
        throw (err);
    }

    for (let i = 0; i < files.length; i += 1) {
        copyFileSync(join("./src/markdown/dist/js/", files[i]), join("./build/js/", files[i]));
        console.log("\x1b[32m%s\x1b[0m", `${join("./src/markdown/dist/js/", files[i])} -> ${join("./build/js/", files[i])}`); /* eslint-disable-line no-console */
    }
});

copyFileSync("./src/markdown/dist/markdown.css", "./build/markdown.css");
console.log("\x1b[32m%s\x1b[0m", "src/markdown/dist/markdown.css -> build/markdown.css"); /* eslint-disable-line no-console */
copyFileSync("./src/markdown/dist/markdown.js", "./build/markdown.js");
console.log("\x1b[32m%s\x1b[0m", "src/markdown/dist/markdown.js -> build/markdown.js"); /* eslint-disable-line no-console */
copyFileSync("./src/markdown/dist/index.html", "./build/markdown.html");
console.log("\x1b[32m%s\x1b[0m", "src/markdown/dist/index.html -> build/markdown.html"); /* eslint-disable-line no-console */
