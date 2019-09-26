'use strict'

const rl = require('readline-sync');

let salir = false;

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

  console.log(`\n La cantidad a pagar es ${precio}€ \n \n`);
};

/*Crea un programa que permita generar su lista de la compra.
  El programa solicitará al usuario ítems a añadir a la lista de la compra.
  El programa ignorará los ítems que ya han sido añadidos y no los añadirá de nuevo.
  Cuando el usuario finalice de introducir ítems, el programa mostrará toda la lista de
ítems que el usuario ha introducido.*/

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

  lista.map(articulo => console.log(`- ${articulo}`));

};

while(!salir){
  console.log('Elige una opcion de la lista o -1 para salir');
  console.log('1: Calculador de tarifa');
  console.log('2: Lista de la compra');
  let option = parseInt(rl.question('Introduce una opcion: '));

  switch (option) {
    case 1:
      calculadorTarifa();
      break;

    case 2:
      listaCompra();
      break;

    case -1:
      salir = true;
      break;


    default:
      console.log('Algo ha ido mal, elige una opcion de la lista o -1 para salir');
      break;

  }
}
