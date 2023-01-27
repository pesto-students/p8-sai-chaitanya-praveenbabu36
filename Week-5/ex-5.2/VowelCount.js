//function to count vowels
function vowelCount(inp) {
  //empty map
  let vMap = new Map();

  //iterate the str
  for (let ch of inp) {
    //if vowel
    if ("aeiou".indexOf(ch) != -1) {
      let count = 1;

      //if already in map
      if (vMap.has(ch)) count = vMap.get(ch) + 1;

      vMap.set(ch, count);
    }
  }

  return vMap;
}

//test
console.log(vowelCount("canon"));
console.log(vowelCount("shh"));
console.log(vowelCount("praveen babu"));
