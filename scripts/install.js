const { spawnSync } = require("child_process");

spawnSync("npm", ["install"], {
    env: process.env,
    cwd: "./src/markdown/",
    stdio: "inherit",
});
