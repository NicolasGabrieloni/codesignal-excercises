// EJERCICIO 15

function solution(picture: string[]): string[] {
    let techos = 0;
    let contador = 0;
  
    for (let i = 0; i < picture.length; i++) {
      contador++;
      for (let j = 0; j < picture[i].length + 2; j++) {
        techos += 1;
      }
      if (contador === 1) {
        break;
      }
    }
  
    let asteriscosTechos: string[] = [];
  
    for (let i = 0; i < techos; i++) {
      asteriscosTechos.push("*");
    }
  
    let aesterisc = asteriscosTechos.join("");
  
    picture.push(aesterisc);
    picture.unshift(aesterisc);
  
    for (let i = 1; i < picture.length - 1; i++) {
      picture[i] = "*" + picture[i] + "*";
    }
  
    return picture;
  }