const sumAll = function(n1,n2) {

    if(typeof(n1)!="number" ||typeof(n2)!="number"){
        return "ERROR"
    }

    if(n1<0 || n2<0){
        return "ERROR"
    }

    let large = Math.max(n1,n2)
    let small = Math.min(n1,n2)
    let sum=0;

    for(let i = small;i<=large;i++){
        sum+=i
    }

    return sum;

};

sumAll(10, "90")

// Do not edit below this line
module.exports = sumAll;
