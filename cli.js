#!/usr/bin/env node
const meow = require("meow");
const help = require("./lib/help");
const cliController = require(".");
const cli = meow(help, {
  autoHelp: false,
  autoVersion: false,
  flags: {
    version: {
      type: "boolean",
      alias: "v",
      default: "0.0.0"
    }
  }
});

cliController(cli.input, cli.flags, cli.showHelp);
