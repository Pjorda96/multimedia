'use strict';

const rl = require('readline-sync');

let salir = false;
let dataArray = [];
let fin = false;

const calculadorTarifa = () => {
  let option = parseInt(rl.question('Introduce los minutos: '));
  let precio = 10;
  const bp1 = 180, bp2 = 240;
  const dif = bp2 - bp1;

  if (option > bp1) {
    option -= bp1;

    if (option > dif) {
      const dif = bp2 - bp1;
      precio += .10 * dif;
      option -= dif;

      precio += .20 * option;
    } else {
      precio += .10 * option;
    }
  }

  console.log(`\nLa cantidad a pagar es ${precio}€\n`);
};


const listaCompra = () => {
  let lista = [];
  let fin = false;

  while (!fin) {
    let option = rl.question('Introduce el articulo o enter para terminar: ');

    if (option) {
      lista.includes(option) !== true && lista.push(option);
    } else {
      fin = !fin;
    }
  }

  console.log('\nCosas a comprar: ');
  lista.map(articulo => console.log(`- ${articulo}`));
};


const standardDeviation = dataArray => {
  const calcularMedia = dataArray => {
    let suma = 0;

    dataArray.map(x => suma += x);

    return suma/dataArray.length;
  };

  let resultado = 0;
  const media = calcularMedia(dataArray);

  dataArray.map(x => {
    const res = x - media;
    resultado += res * res;
  });

  resultado = Math.sqrt(resultado/dataArray.length);
  console.log(`\nLa desviacion tipica es ${resultado}\n`);
};


const withoutVowels  = text => {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);

    char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' && (result += char);
  }

  console.log(`\n${result}\n`);
};


const linearSearch = (number, dataArray) => {
  let exists = false;

  dataArray.map(x => x === number && (exists = true));

  exists ? console.log('\nNumero encontrado\n') : console.log('\nNumero no encontrado\n')
};

while(!salir){
  console.log('Elige una opcion de la lista o -1 para salir');
  console.log('1: Calculador de tarifa');
  console.log('2: Lista de la compra');
  console.log('3: Calcular desviacion tipica');
  console.log('4: Eliminar vocales');
  console.log('5: Buscador de numero');
  let option = parseInt(rl.question('Introduce una opcion: '));

  switch (option) {
    case 1:
      calculadorTarifa();
      break;

    case 2:
      listaCompra();
      break;

    case 3:
      dataArray = [];
      fin = false;

      while (!fin) {
        let option = parseInt(rl.question('Introduce un numero o -1 para calcular: '));

        if (option !== -1) {
          dataArray.push(option);
        } else {
          fin = !fin;
        }
      }

      standardDeviation(dataArray);
      break;

    case 4:
      withoutVowels(rl.question('Introduce un texto: \n'));
      break;

    case 5:
      dataArray = [];
      fin = false;

      const number = parseInt(rl.question('Introduce el numero a buscar: '));

      while (!fin) {
        let option = parseInt(rl.question('Introduce un numero o -1 para calcular: '));

        if (option !== -1) {
          dataArray.push(option);
        } else {
          fin = !fin;
        }
      }

      linearSearch(number, dataArray);
      break;

    case -1:
      salir = true;
      break;


    default:
      console.log('Algo ha ido mal, elige una opcion de la lista o -1 para salir');
      break;

  }
}
