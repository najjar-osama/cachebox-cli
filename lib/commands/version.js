const getVersion = () => {
  const versionString = `
Cachebox-cli, version 1.0.

`;
  return versionString;
};
const showVersion = () => {
  console.log(getVersion());
  process.exit(0);
};
module.exports = {
  getVersion,
  showVersion
};
