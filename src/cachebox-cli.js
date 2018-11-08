const execa = require("execa");
const Lister = require("listr");
const isProjectDir = require("./utils").isProjectDir;

console.log(isProjectDir(/.*.(?:json|js)$/));
