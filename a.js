const arr = ["a", "b", "c", "d", "f", "g"];
function randomArr(arr) {
  const result = Math.floor(Math.random() * arr.length);
  return arr[result];
}
console.log(randomArr(arr));
