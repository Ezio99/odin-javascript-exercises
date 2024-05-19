const palindromes = function (val) {

    val = val.toLowerCase().split("").filter((i) =>{
         return /^[a-zA-Z0-9]+$/i.test(i)
    })
    let original = val.join("")

    let rev = val.reverse().join("")
    return original == rev
};

// Do not edit below this line
module.exports = palindromes;
