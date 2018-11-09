const version = require("./lib/version");

// cli-controller will map the given input & flages with the right action
const cliController = (input, flags, showHelp) => {
  if (flags.help) {
    showHelp();
  }
  if (flags.version) {
    console.log(version);
  }
  if (
    Object.keys(flags).length === 2 &&
    Object.keys(flags)[0] === "version" &&
    !flags.version &&
    input.length === 0
  ) {
    showHelp();
  }
};

module.exports = cliController;
