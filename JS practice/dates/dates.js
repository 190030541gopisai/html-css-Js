/*
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
*/
var d=new Date();

//new Date(year, month, ...)
console.log("-------------new Date(year, month, ...)---------------");
console.log(new Date(2018,11,2,18,2,30,10).toString());


/*
Previous Century
One and two digit years will be interpreted as 19xx:
*/
console.log("---------------Previous Century--------------");
console.log(new Date(9,0,1).toString());

//new Date(dateString)
console.log("------------------new Date(dateString)------------------------");
console.log(new Date("Dec 2,2001 8:50:02").toString());

//new Date(milliseconds)
console.log("-------------new Date(milliseconds)--------------");
console.log(new Date(1000));
console.log(new Date(0));
console.log(new Date(100000000000));
console.log(new Date(-86400000));


console.log("--------------date methods--------------------");
//date methods
console.log(d);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toUTCString());
console.log(new Date(0));
console.log("----------------------------------");
