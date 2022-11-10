function check(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u") {
            count++;
        }
    }
    console.log(count);
}
check("abcdefgh");
