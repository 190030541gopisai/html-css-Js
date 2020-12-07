

/*
Array.map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.
*/
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myunction);

console.log(numbers2);

function myunction(value, index, array) {
  return value * 2;
}


var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFnction);

console.log(numbers2);

function myFnction(value) {
  return value * 2;
}

/*
Array.filter()
The filter() method creates a new array with array elements that passes a test.

This example creates a new array from elements with a value larger than 18:

*/

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);
console.log(over18);

function myFunction(value, index, array) {
  return value > 18;
}
//without index array parameters

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}


/*
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

The reduce() method does not reduce the original array.
*/
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myReduce);

console.log("The sum is " + sum);

function myReduce(total, value, index, array) {
  return total + value;
}

//The reduce() method can accept an initial value
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myReduce2,100);
console.log("The sum is " + sum);

function myReduce2(total, value) {
  return total + value;
}


[1,2,3].forEach(function(value,index){
    console.log(value,index);
});


var fnd=[1,2,3,4,5,6].find(function(value){
    return (value>3);
});

console.log("find = "+fnd);

var fnd=[1,2,3,4,5,6].findIndex(function(value){
    return (value>3);
});

console.log("findIndex = "+fnd);


var index=[1,2,3,4,5,6].lastIndexOf(3,2);
console.log(index);

var index=[1,2,3,4,5,6].indexOf(5,3);
console.log(index);


var boolfind=["123da",12,34,5,6,6].some(function(value){
    return value=="123da";
});

console.log("boolfind some = "+boolfind);

var boolfind=["123da",12,34,5,6,6].every(function(value){
    return value>0;
});

console.log("boolfind every = "+boolfind);


var sum=[10,20,30,40].reduceRight(function(result,item){
    return result+item;
},20);

console.log("sum reduceright = ",sum,"typeof = ",typeof sum);

var sum=["gopi",10,20,30,40].reduceRight(function(result,item){
    return result+item;
},20);

console.log("sum reduceright = ",sum,"typeof = ",typeof sum);

var sum=["gopi",10,20,30,40].reduce(function(result,item){
    return result+item;
},20);

console.log("sum reduceright = ",sum,"typeof = ",typeof sum);


var arr2=[12,13,14,15,16,17].filter(function(val){
    return val>=14; 
});
console.log(arr2);



var arr2=[1,2,3,4,5,6].map(function(val){
    return val*10; 
});
console.log(arr2,typeof arr2);
