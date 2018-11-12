const getHelpString = () => {
  const helpString = `
  Usage
    $ cachebox <input> [<option>...]

  Options
    --help, -h  display help
    --version, -v display version number
  
`;
  return helpString;
};
const showHelp = () => {
  console.log(getHelpString());
  process.exit(0);
};
module.exports = {
  getHelpString,
  showHelp
};
