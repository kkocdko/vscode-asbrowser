"use strict";

const path = require("path");
const fs = require("fs");
const vscode = require("vscode");

/** @param {vscode.ExtensionContext} context */
exports.activate = (context) => {
  const command = vscode.commands.registerCommand("asbrowser.open", () => {
    const panel = vscode.window.createWebviewPanel(
      "asbrowser.webview",
      "AsBrowser",
      vscode.ViewColumn.Active,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      }
    );
    panel.webview.html = fs
      .readFileSync(path.join(__dirname, "webview.html"))
      .toString();
  });
  context.subscriptions.push(command);
};
