const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((total,i) =>{
    return total+i
  },0)
};

const multiply = function(arr) {
  return arr.reduce((total,i) =>{
    return total*i
  },1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {

  if(a==0 || a==1){
    return 1
  }

  let prod = 1

	for(let i=2;i<=a;i++){
    prod*=i
  }

  return prod
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
