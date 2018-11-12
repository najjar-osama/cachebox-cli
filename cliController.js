const version = require("./lib/commands/version");
const help = require("./lib/commands/help");

// cli-controller will map the given input & flages with the right action
const cliController = (input, flags, showHelp) => {
  if (flags.version) {
    version.showVersion();
  }
  if (flags.help) {
    help.showHelp();
  }
};

module.exports = cliController;
