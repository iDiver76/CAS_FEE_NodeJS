/**
 * Created by davidjanssen on 14.06.17.
 */
const fs = require("fs");

function writeFile(name, content) {

  fs.writeFile(name, content, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

module.exports = { fileWriter : writeFile};