const getVersionString = () => {
  const versionString = `
Cachebox-cli, version 1.0.

`;
  return versionString;
};
const showVersion = () => {
  console.log(getVersionString());
  process.exit(0);
};
module.exports = {
  getVersionString,
  showVersion
};
