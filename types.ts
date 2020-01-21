//boolean
let flag: boolean = false;
console.log("The flag is " + flag);

//number
let myNum: number = 100;
console.log("The Number is " + myNum);

//string
let myString: string = "kacper";
console.log("The string is " + myString);
myString = 'kacper grzenda';
console.log("The string is " + myString);

//array
let myArray: number[] = [1, 2, 3];
console.log("The First Number in Array is " + myArray[0]);


// Function string value
function myfunction(value: string): number{

    let num: number = value.length;

    

    return num;
}

let myCount:number = myfunction("test 1");
console.log( myCount);

// Function string value no space
function myfunction2(value: string): number{

    let num: number = value.replace(/\s/g, "").length;

    return num;
}

let myCount2:number = myfunction2("test 1");
console.log( myCount2);

function space_or_not(value: string, spaces?: boolean) : number{

    let num: number;
    if(spaces){
        num = value.replace(/\s/g, "").length;
    }
    else{
        num = value.length;
    }
return num;

}

let myCount3:number = space_or_not("test 1", false);
myCount3 = space_or_not("test 1", true);
