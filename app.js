const express = require('express');

// init express
const app = express();


//words input
let words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"]

function groupAnagrams(strs) {
    let result = {};
  for (let word of strs) {
      let cleansed = word.split("").sort().join("");
      if (result[cleansed]) {
        result[cleansed].push(word);
      } else {
        result[cleansed] = [word];
      }
    }
  return Object.values(result);
}

console.log(groupAnagrams(words))

// listen server
app.listen(3000, () => {
    console.log('Server Running on Port 3000')
})