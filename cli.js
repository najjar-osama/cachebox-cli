#!/usr/bin/env node
const meow = require("meow");
const helpString = require("./lib/commands/help").getHelpString();
const cliController = require(".");

const cli = meow(helpString, {
  autoHelp: false,
  autoVersion: false,
  flags: {
    version: {
      type: "boolean",
      alias: "v",
      default: "0.0.0"
    },
    help: {
      type: "boolean",
      alias: "h",
      default: helpString
    }
  }
});

cliController(cli.input, cli.flags);
