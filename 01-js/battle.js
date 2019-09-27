'use strict';

const AtributosEnumerable = {
  STR: 0,
  SPD: 1,
  VIT: 2,
  DEX: 3,
  MAG: 4,
};

const RaceConstants = {
  HUMAN: 'Human',
  ELVEN: 'Elven',
  DWARF: 'Dwarf',
  MAGE: 'Mage',
};

function diceThrow (sides = 20) {
  return Math.floor( Math.random() * sides )
}

function createRPGCharacter (race) {
  let atributes = [];

  switch (race) {
    case RaceConstants.HUMAN:
      atributes.push(8 + diceThrow(6) + diceThrow(6));
      atributes.push(4 + diceThrow(6));
      atributes.push(diceThrow());
      atributes.push(diceThrow());
      atributes.push(diceThrow(10));
      return atributes;

    case RaceConstants.ELVEN:
      atributes.push(6 + diceThrow(4) + diceThrow(4));
      atributes.push(diceThrow());
      atributes.push(diceThrow(12));
      atributes.push(3 + diceThrow(10) + diceThrow(10));
      atributes.push(diceThrow());
      return atributes;

    case RaceConstants.DWARF:
      atributes.push(10 + diceThrow(10));
      atributes.push(diceThrow(8) + diceThrow(8));
      atributes.push(10 + diceThrow(8));
      atributes.push(diceThrow());
      atributes.push(diceThrow(8));
      return atributes;

    case RaceConstants.MAGE:
      atributes.push(diceThrow(6));
      atributes.push(diceThrow());
      atributes.push(diceThrow(10));
      atributes.push(diceThrow());
      atributes.push(12 + diceThrow(8));
      return atributes;

    default:
      return atributes;
  }
}

console.log(createRPGCharacter());
