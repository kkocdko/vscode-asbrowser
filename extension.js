"use strict";

// https://github.com/microsoft/vscode/issues/130367
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
    panel.webview.html = `/*{webview.html}*/`;
  });
  context.subscriptions.push(command);
};
