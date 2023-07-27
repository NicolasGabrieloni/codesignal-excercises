// EJERCICIO 14

function solution(a: number[]): number[] {
  let equipo1: number[] = [];
  let equipo2: number[] = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      equipo1.push(a[i]);
    } else {
      equipo2.push(a[i]);
    }
  }

  let resultado: number[] = [];
  let suma1: number = 0;
  let suma2: number = 0;
  for (let i = 0; i < equipo1.length; i++) {
    suma1 += equipo1[i];
  }
  for (let i = 0; i < equipo2.length; i++) {
    suma2 += equipo2[i];
  }
  resultado.push(suma1);
  resultado.push(suma2);

  return resultado;
}



