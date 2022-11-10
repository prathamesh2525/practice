function check(str: string): void {
  let counta: number = 0
  let counte: number = 0
  let counti: number = 0
  let counto: number = 0
  let countu: number = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "A") counta++
    else if (str[i] == "e") counte++
    else if (str[i] == "i") counti++
    else if (str[i] == "o") counto++
    else if (str[i] == "u") countu++
  }
  console.log(counta, counte, counti, counto, countu)
}

check("abcdefgAhefqoief")

function checkForAlphabet(alphabet, str)