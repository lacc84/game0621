let readline = require('readline-sync');

let a = readline.question('Kérlek add meg a neved!');
console.log('Üdvözöllek a kvízadatbázisban,', a, '!');
console.log('Válassz, melyik kérdésre szeretnéd tudni a választ?');
let menuArray = ['Mi Csongrád megye székhelye?', 'Mi Békés megye székhelye?', 'Mi Magyarország fővárosa?'];
let index = (readline.keyInSelect(menuArray) + 1);
let indexFunct = index - 1;
let answers1 = ['Szegvár', 'Szeged', 'Csongrád', 'Gádoros'];
let answers2 = ['Szegvár', 'Békéscsaba', 'Nagyszénás', 'Gádoros'];
let answers3 = ['Bukarest', 'Budapest', 'Ottava', 'Helsinki'];

switch (index) {
  case 1:
    console.log(menuArray[indexFunct]);
    let index1 = (readline.keyInSelect(answers1));
    if (answers1[index1] === answers1[1]) {
      console.log('Gratulálok, a válasz helyes!');
    } else {
      console.log('Helytelen válasz, a helyes válasz', answers1[1], 'lett volna.');
    }

    break;

  case 2:
    console.log(menuArray[indexFunct]);
    let index2 = (readline.keyInSelect(answers2));
    if (answers2[index2] === answers2[1]) {
      console.log('Gratulálok, a válasz helyes!');
    } else {
      console.log('Helytelen válasz, a helyes válasz', answers2[1], 'lett volna.');
    }
    break;

  case 3:
    console.log(menuArray[indexFunct]);
    let index3 = (readline.keyInSelect(answers3));
    if (answers3[index3] === answers3[1]) {
      console.log('Gratulálok, a válasz helyes!');
    } else {
      console.log('Helytelen válasz, a helyes válasz', answers3[1], 'lett volna.');
    }
    break;

  default:
    console.log('Köszönjük, hogy kerestél kvízadatbázisunkban! Minden jót kívánunk!');
}
