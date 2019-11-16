const fs = require("fs");

module.exports = path => {
  const content = fs.readFileSync(path, "utf8");
  return content.split(/\r?\n/);
};
