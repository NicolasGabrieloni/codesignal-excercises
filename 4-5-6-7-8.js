// EJERCICIO 4

function solution(inputArray) {
    let arrayProducts = []
      for (let i = 0 ; i < inputArray.length - 1 ; i++) {
          arrayProducts.push(inputArray[i] * inputArray[i + 1]);
      }
      
      return Math.max(...arrayProducts)
  }

  
// EJERCICIO 5

function solution(n) {
    return (n - 1) ** 2 + n ** 2 ;
}

// EJERCICIO 6

function solution(statues) { 
    let arrayOrdenado = statues.sort((a,b) => a - b);
    let resultado = 0
    for (let i = 0 ; i < arrayOrdenado.length ; i++) {
        if (arrayOrdenado[i + 1] - arrayOrdenado[i] > 1){
            resultado += arrayOrdenado[i + 1] - arrayOrdenado[i] - 1
        }
    }
    return resultado;
}

// EJERCICIO 7

function solution(sequence) {
   
    let quitar = false;
    
    for (let i = 0; i < sequence.length ; i++ ) {
        if (sequence[i] <= sequence[i - 1]) {
            if (quitar) {
                return false
            }   else if (i === 1 || sequence[i] > sequence[i - 2]) {
                 sequence.splice( i - 1 , 1 );
            } else {
                 sequence.splice( i, 1 )
            }
                
            quitar = true;
           i--;
        }
    }
    return true;
}

// EJERCICIO 8


function solution(matrix) {
    
    let suma = 0;
    
    for ( let i = 0 ; i < matrix.length ; i++) {
        const subArray = matrix[i];
        for (let j = 0 ; j < subArray.length ; j++) {
            if (subArray[j] === 0 && matrix[i + 1] && matrix[i + 2] && matrix[i + 3]) {
                matrix[i + 1][j] = 0;
                matrix[i + 2][j] = 0;
                matrix[i + 3][j] = 0;
            }  else if (subArray[j] === 0 && matrix[i + 1] && matrix[i + 2]) {
                matrix[i + 1][j] = 0;
                matrix[i + 2][j] = 0;
            } else if (subArray[j] === 0 && matrix[i + 1]) {
                matrix[i + 1][j] = 0;
            }
            suma += subArray[j]
        }
    }
    return suma
}