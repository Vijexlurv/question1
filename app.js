
/*function checkCentury (year) {
    let century;
    let remainder = year % 100
    let divide = year % 100
    if(year % 100 ==0) {
        return year/100 
    } else {
       let remainder = year % 100 
       result.year - remainder


    
function removeChar(str) {
    return str.slice(1, 7);


}
console.log(removeChar('eloquent'));  

function multiplyScores ( array ) {
    let arr =[]
    for (let i = 0; i < array.length; i++) {

        arr.push(scores [i] * 2)
    }

 return arr
}

console.log (multiplyScores[1,2,3,4,5,6]); 

function sumNumber(input){
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }

return sum;

}
console.log(sumNumber([10, 20, 30, 40, 50]));


function sumNumber (num1, num2){
    let sum = num1 + num2;

    return sum

    }

console.log(sumNumber(2, 3));


//Given an array of boolean values return the number of true in an array.

function countTrue (arr) {
    let count = 0;
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] === true) i++;

    return true;
        }
    }

console.log(countTrue(false,false, true, true, false));*/


function check(arr) {
    let countTrue = 0;
    let countFalse = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == true) {
        countTrue ++;

        }else if(arr[i] == false) {
        countFalse ++;
        }
    }
        return [countTrue, countFalse]
}
    console.log (check([false, false, true, true, false]));














