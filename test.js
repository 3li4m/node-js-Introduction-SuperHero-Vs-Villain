//const fs = require("fs");

//fs.copyFileSync("file1.txt", "file2.txt");

var superheroes = require("superheroes");
var supervillians = require("supervillains");

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillians.random();

console.log(mySuperHeroName + " VS " + mySuperVillainName);