const reverseString = function (value) {
    let txt = ""
    for (let i = 1; i <= value.length; i++) {
        txt += value.at(-i);
        console.log(txt)
    }

    console.log(txt)

    return txt;

};

reverseString("hello")

// Do not edit below this line
module.exports = reverseString;
