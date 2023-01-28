//Duplicate Check using Set
function hasDuplicate(arr) {
  //this removes the duplicates
  let mySet = new Set(arr);

  //console.log(mySet);

  if (arr.length == mySet.size) {
    return false;
  }
  return true;
}

console.log(hasDuplicate([1, 5, -1, 4]));
console.log(hasDuplicate([1, 5, 1, 4]));
