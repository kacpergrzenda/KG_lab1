//boolean
var flag = false;
console.log("The flag is " + flag);
//number
var myNum = 100;
console.log("The Number is " + myNum);
//string
var myString = "kacper";
console.log("The string is " + myString);
myString = 'kacper grzenda';
console.log("The string is " + myString);
//array
var myArray = [1, 2, 3];
console.log("The First Number in Array is " + myArray[0]);
// Function string value
function myfunction(value) {
    var num = value.length;
    return num;
}
var myCount = myfunction("test 1");
console.log(myCount);
// Function string value no space
function myfunction2(value) {
    var num = value.replace(/\s/g, "").length;
    return num;
}
var myCount2 = myfunction2("test 1");
console.log(myCount2);
function space_or_not(value, spaces) {
    var num;
    if (spaces) {
        num = value.replace(/\s/g, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
var myCount3 = space_or_not("test 1", false);
myCount3 = space_or_not("test 1", true);
