#!/usr/bin/env node
const meow = require("meow");
const helpString = require("./lib/commands/help").getHelpString();
const versionString = require("./lib/commands/version").getVersionString();
const cliController = require("./cliController");

const cli = meow(helpString, {
  autoHelp: false,
  autoVersion: false,
  flags: {
    version: {
      type: "boolean",
      alias: "v",
      default: versionString
    },
    help: {
      type: "boolean",
      alias: "h",
      default: helpString
    }
  }
});

cliController(cli.input, cli.flags);
