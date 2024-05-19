const getTheTitles = function(books) {
    const arr=[];
    books.forEach(element => {
        arr.push(element.title)
    });
    
    return arr
};

// Do not edit below this line
module.exports = getTheTitles;
