/*const email:
let myParagraph =  document.querySelector()

HERE.

function sum(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++)

    result += numbers [i]
}
return result;

console.log(sum(2,3.4,5,6,7));

function maxValue (num1, num2, num3 ,...numbers) {
    return Math.max(...arguments);
}

console.log(maxValue (2, 3, 4, 5, 10)); */


function productElements(array) {
let result = []
for(let i =0; i < array.length; i++){
let count = array[i] * 2
    result.push(count);

} 
let firstElement = result.slice(0,1)
let final = firstElement.concat(result)
return final;

}
console.log(productElements([2,4,6,8,10]));


