// function check(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == "a" ||
//             str[i] == "e" ||
//             str[i] == "i" ||
//             str[i] == "o" ||
//             str[i] == "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// check("abcdefgh");

function count(string) {
  var count = {}
  string.split("").forEach(function (s) {
    if (s == "a" || s == "e" || s == "i" || s == "o" || s == "u") {
    } else {
      count[s] ? count[s]++ : (count[s] = 1)
    }
  })
  return count
}

console.log(count("ojbvewibnvb"))
