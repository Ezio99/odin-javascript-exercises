const findTheOldest = function(people) {
    let oldPerson={}
    people.reduce((maxAge,person)=>{
        let upper= person.yearOfDeath? person.yearOfDeath : new Date().getFullYear()
        let age = upper - person.yearOfBirth
        
        if(maxAge<age){
            maxAge=age
            oldPerson=person
        }

        return maxAge
    },0)

    return oldPerson
};

// Do not edit below this line
module.exports = findTheOldest;
