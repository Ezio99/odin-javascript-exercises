const removeFromArray = function(arr,...args) {
    

    let newArr = arr.filter(i => !args.includes(i))

    console.log(newArr)

    return newArr;
};

removeFromArray([1,2,3,4], 2,4)

// Do not edit below this line
module.exports = removeFromArray;
