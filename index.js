const version = require("./lib/version");

// cli-controller will map the given input & flages with the right action
const cliController = (input, flags, showHelp) => {
  if (flags.help) {
    showHelp();
  }
  if (flags.version) {
    console.log(version);
  }
  if (flags.help) {
    showHelp();
  }
};

module.exports = cliController;
