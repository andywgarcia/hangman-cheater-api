var fs = require("fs");

const path = "/usr/share/dict/words";

fs.readFile(path, "utf8", (error, content) => {
  const dictionary = content.split(/\r?\n/);
  console.log(
    dictionary.filter(word => {
      return word.match(/^aba.*/);
    })
  );
});
