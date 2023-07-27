// EJERCICIO 1

function solution(param1, param2) {
    return param1 + param2;
   }

   
// EJERCICIO 2

function solution(year) {
    if(year > 0 && year <= 2100) {
        return Math.ceil(year/100);
    }
}



// EJERCICIO 3

function solution(inputString) {
    let inputPalindrome = inputString.split('').reverse().join('')
       if(inputPalindrome === inputString) {
           return true;
       } else {
           return false;
       }
    }