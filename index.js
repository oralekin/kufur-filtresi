const fs = require("fs");

const vals = Array.prototype.concat(fs.readFileSync("./hard.txt",{encoding: "UTF-8"}).split("\n"),fs.readFileSync("./soft.txt",{encoding: "UTF-8"}).split("\n"))

// console.log(vals);
module.exports = vals;