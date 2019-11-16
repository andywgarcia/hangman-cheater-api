const fs = require("fs");

module.exports = async path => {
  const content = fs.readFileSync(path, "utf8");
  return content.split(/\r?\n/);
};
