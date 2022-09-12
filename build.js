"use strict";

const fs = require("node:fs");
const path = require("node:path");

fs.writeFileSync(
  path.join(__dirname, "dist.js"),
  fs
    .readFileSync(path.join(__dirname, "extension.js"))
    .toString()
    .replace(
      "/*{webview.html}*/",
      fs.readFileSync(path.join(__dirname, "webview.html")).toString()
    )
    .replace(/\n\s+/g, "\n")
);
