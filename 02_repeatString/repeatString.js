const repeatString = function(value,repeat) {

    if(repeat<0){
        return "ERROR"
    }

    let txt = ""
    for (let i=1;i<=repeat;i++){
        txt+=value;
    }

    return txt
};

// Do not edit below this line
module.exports = repeatString;
