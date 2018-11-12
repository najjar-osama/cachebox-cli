const cfonts = require("cfonts");

const getHelpString = () => {
  const mxTitleStyled = cfonts.render("mx-cli", {
    font: "block", // define the font face
    colors: ["blue", "blueBright"] // define all colors
  }).string;
  const helpString = `${mxTitleStyled}Usage
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
