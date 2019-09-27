'use strict';

const rl = require('readline-sync');

const AtributesEnumerable = {
  STR: 0, // Strength
  SPD: 1, // Speed
  VIT: 2, // Vitality
  DEX: 3, // Dexterity
  MAG: 4, // Magic
};

const RaceConstants = {
  HUMAN: 'Human',
  ELVEN: 'Elven',
  DWARF: 'Dwarf',
  MAGE: 'Mage',
};

/**
 *
 * @param sides
 * @returns {number}
 */
function diceThrow (sides = 20) {
  return Math.floor( Math.random() * sides )
}

/**
 *
 * @param race
 * @returns {[]}
 */
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

/**
 *
 * @param race
 * @param atributes
 * @returns {number}
 */
function getDamage (race, atributes) {
  let damage;

  switch (race) {
    case RaceConstants.HUMAN:
      damage = 1.5 * atributes[AtributesEnumerable.STR]
        + .4 * atributes[AtributesEnumerable.DEX];
      return Math.ceil(damage);

    case RaceConstants.ELVEN:
      damage = atributes[AtributesEnumerable.STR]
        + 1.2 * atributes[AtributesEnumerable.DEX]
        + .1 * atributes[AtributesEnumerable.MAG];
      return Math.ceil(damage);

    case RaceConstants.DWARF:
      damage = 2 * atributes[AtributesEnumerable.STR];
      return Math.ceil(damage);

    case RaceConstants.MAGE:
      damage = 2 * atributes[AtributesEnumerable.MAG]
        + .1 * atributes[AtributesEnumerable.DEX];
      return Math.ceil(damage);

    default:
      return 0;
  }
}

/**
 *
 * @param race
 * @param atributes
 * @returns {number}
 */
function getDefense (race, atributes) {
  let defense;

  switch (race) {
    case RaceConstants.HUMAN:
      defense = atributes[AtributesEnumerable.VIT]
        + .2 * atributes[AtributesEnumerable.SPD];
      return Math.ceil(defense);

    case RaceConstants.ELVEN:
      defense = 1.3 * atributes[AtributesEnumerable.SPD]
        + .5 * atributes[AtributesEnumerable.VIT];
      return Math.ceil(defense);

    case RaceConstants.DWARF:
      defense = 1.1 * atributes[AtributesEnumerable.VIT]
        + 1.1 * atributes[AtributesEnumerable.STR];
      return Math.ceil(defense);

    case RaceConstants.MAGE:
      defense = .8 * atributes[AtributesEnumerable.MAG]
        + .3 * atributes[AtributesEnumerable.SPD];
      return Math.ceil(defense);

    default:
      return 0;
  }
}

/**
 *
 * @param race
 * @param atributes
 * @returns {number}
 */
function getHealthPoints (race, atributes) {
  let hp;

  switch (race) {
    case RaceConstants.HUMAN:
      hp = atributes[AtributesEnumerable.STR]
        + atributes[AtributesEnumerable.VIT]
        +10;
      return Math.ceil(hp);

    case RaceConstants.ELVEN:
      hp = atributes[AtributesEnumerable.STR]
        + atributes[AtributesEnumerable.DEX]
        +5;
      return Math.ceil(hp);

    case RaceConstants.DWARF:
      hp = atributes[AtributesEnumerable.STR]
        + atributes[AtributesEnumerable.VIT]
        +15;
      return Math.ceil(hp);

    case RaceConstants.MAGE:
      hp = atributes[AtributesEnumerable.MAG]
        + atributes[AtributesEnumerable.VIT]
        +3;
      return Math.ceil(hp);

    default:
      return 0;
  }
}

/**
 *
 * @param firstRace
 * @param firstCharacterStats
 * @param secondRace
 * @param secondCharacterStats
 * @returns {[number, string]}
 */
function simulateBattle (firstRace, firstCharacterStats, secondRace, secondCharacterStats) {
  let firstPlayer = {
    damage: getDamage(firstRace, firstCharacterStats),
    defense: getDefense(firstRace, firstCharacterStats),
    hp: getHealthPoints(firstRace, firstCharacterStats),
    race: firstRace,
    stats: firstCharacterStats,
  };
  let secondPlayer = {
    damage: getDamage(secondRace, secondCharacterStats),
    defense: getDefense(secondRace, secondCharacterStats),
    hp: getHealthPoints(secondRace, secondCharacterStats),
    race: secondRace,
    stats: secondCharacterStats,
  };
  const turnEnumerable = { FIRST: false, SECOND: true };
  let turn, winner, turnCounter = 0;
  
  const firstPlayerAttack = () => {
    secondPlayer.hp -= (firstPlayer.damage - secondPlayer.defense) > 0
      ? firstPlayer.damage - secondPlayer.defense
      : 0;

    turn = turnEnumerable.SECOND;
    turnCounter++;
  };
  
  const secondPlayerAttack = () => {
    firstPlayer.hp -= (secondPlayer.damage - firstPlayer.defense) > 0
      ? secondPlayer.damage - firstPlayer.defense
      : 0;

    turn = turnEnumerable.FIRST;
    turnCounter++;
  };

  while (firstPlayer.hp > 0 && secondPlayer.hp > 0) {
    if (firstPlayer.stats[AtributesEnumerable.SPD] >= secondPlayer.stats[AtributesEnumerable.SPD]) {
      firstPlayerAttack();

      if (secondPlayer.hp > 0) {
        secondPlayerAttack();
      }
    } else {
      secondPlayerAttack();

      if (firstPlayer.hp > 0) {
        firstPlayerAttack();
      }
    }
  }
  
  if (firstPlayer.hp <= 0) {
    winner = 'second';
  } else if (secondPlayer.hp <= 0) {
    winner = 'first';
  }

  console.log([turnCounter, winner]);
}

function parseText (player) {
  switch (player) {
    case 1:
      return RaceConstants.HUMAN;

    case 2:
      return RaceConstants.ELVEN;

    case 3:
      return RaceConstants.DWARF;

    case 4:
      return RaceConstants.MAGE;

    default:
      return RaceConstants.HUMAN;
  }
}

console.log('\nWelcome to the role Game\n');
console.log('Take the race');
console.log('1: Human');
console.log('2: Elven');
console.log('3: Dwarf');
console.log('4: Mage\n');
const firstPlayer = parseText(parseInt(rl.question('Player 1: ')));
const secondPlayer = parseText(parseInt(rl.question('Player 2: ')));

simulateBattle(firstPlayer, createRPGCharacter(firstPlayer), secondPlayer, createRPGCharacter(secondPlayer));
