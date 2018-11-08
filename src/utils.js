const fs = require("fs");

// retuns an array of the content of the given path, or null in case of error
const getDirContent = path => {
  let dirContentArr = [];
  try {
    dirContentArr = fs.readdirSync(path);
    return dirContentArr;
  } catch (err) {
    //@Todo: better error handling, with user feedback
    console.error(err);
    return null;
  }
};

const checkTargetDir = (regex, testStr) => {
  return regex.test(testStr);
};

const isProjectDir = regex => {
  const dirContentArr = getDirContent(__dirname);
  /* check if we're working in the right directory
    by checking if the current directory has the targeted files and folder structure
 */
  return dirContentArr.some(dirElementStr => {
    return checkTargetDir(regex, dirElementStr);
  });
};

///.*.(?:json|js)$/

module.exports = {
  getDirContent,
  isProjectDir
};
