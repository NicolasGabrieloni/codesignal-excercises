// EJERCICIO 9

function solution(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (!newArray.length || inputArray[i].length > newArray[0].length) {
      newArray = [inputArray[i]];
    } else if (inputArray[i].length === newArray[0].length) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}

// EJERCICIO 10

function solution(s1, s2) {
  let letrasS1 = {};
  let letrasS2 = {};

  for (let i = 0; i < s1.length; i++) {
    const letra = s1[i];
    letrasS1[letra] = (letrasS1[letra] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    const letra = s2[i];
    letrasS2[letra] = (letrasS2[letra] || 0) + 1;
  }

  let letrasEnComun = 0;

  for (const letra in letrasS1) {
    if (letrasS2.hasOwnProperty(letra)) {
      letrasEnComun += Math.min(letrasS1[letra], letrasS2[letra]);
    }
  }

  return letrasEnComun;
}

// EJERCICIO 11

function solution(n) {
  let nToStr = n.toString();
  let mitad = nToStr.length / 2;

  let primerMitad = nToStr.slice(0, mitad);
  let segundaMitad = nToStr.slice(mitad);

  let suma1 = 0;
  let suma2 = 0;

  let mitad1 = primerMitad.split("");
  let mitad2 = segundaMitad.split("");

  for (let i = 0; i < mitad1.length; i++) {
    let mitad1N = parseInt(mitad1[i]);
    suma1 += mitad1N;
  }

  for (let i = 0; i < mitad2.length; i++) {
    let mitad2N = parseInt(mitad2[i]);
    suma2 += mitad2N;
  }

  let resultado;

  if (suma1 === suma2) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// EJERCICIO 12

function solution(a) {
  let indices = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      indices.push(i);
    }
  }

  let orderNum = a.filter((numero) => numero !== -1);

  orderNum.sort((a, b) => a - b);

  for (let i = 0; i < indices.length; i++) {
    let indice = indices[i];
    orderNum.splice(indice, 0, -1);
  }

  return orderNum;
}

// EJERCICIO 13

function solution(inputString) {
  let stack = [];

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === ")") {
      let j = stack.length - 1;

      while (stack[j] !== "(") {
        j--;
      }

      const substring = stack.slice(j + 1).reverse();
      stack.splice(j, stack.length - j + 1, ...substring);
    } else {
      stack.push(inputString[i]);
    }
  }

  return stack.join("");
}
