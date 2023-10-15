/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 1");

function area(l1, l2) {
  let calcArea = l1 * l2;

  return calcArea;
}

console.log("L'area del rettangolo è: " + area(50, 20) + "cm2");
console.log("L'area del rettangolo è: " + area(70, 30) + "cm2");

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 2");

function crazySum(n1, n2) {
  let sameFactors = null;

  if (n1 === n2) {
    sameFactors = (n1 + n2) * 3;

    return sameFactors;
  } else {
    sameFactors = n1 + n2;

    return sameFactors;
  }
}

console.log(crazySum(10, 15));
console.log(crazySum(4, 4));
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 3");

function crazyDiff(n1) {
  let crazyDiff = null;

  if (n1 <= 19) {
    crazyDiff = Math.abs(n1 - 19);

    return crazyDiff;
  } else {
    crazyDiff = Math.abs(n1 - 19) * 3;

    return crazyDiff;
  }
}

console.log(crazyDiff(18));
console.log(crazyDiff(20));
console.log(crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 4");

function boundary(n) {
  let boundary = null;

  if ((n >= 20 && n <= 100) || n === 400) {
    return (boundary = true);
  } else {
    return (boundary = false);
  }
}

console.log(boundary(19));
console.log(boundary(50));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 5");

function epify(s) {
  let epify = null;

  if (typeof s === "string") {
    if (s.indexOf("EPICODE") === 0) {
      epify = s;
      return epify;
    } else {
      epify = "EPICODE " + s;

      return epify;
    }
  } else {
    return "Field requires a string.";
  }
}
console.log(epify(2));
console.log(epify("EPICODE is awesome"));
console.log(epify("is awesome"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 6");

function check3and7(n) {
  if (typeof n === "number") {
    let check3and7 = null;

    if (n % 3 === 0) {
      check3and7 = n + " is multiple of 3.";

      return check3and7;
    } else if (n % 7 === 0) {
      check3and7 = n + " is multiple of 7.";

      return check3and7;
    } else {
      check3and7 = n + " is not a multiple of 3 or 7.";

      return check3and7;
    }
  } else {
    return "Field requires a positive number.";
  }
}

console.log(check3and7(80));
console.log(check3and7(90));
console.log(check3and7(49));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 7");

function reverseString(string) {
  let reverseString = null;

  if (typeof string === "string") {
    reverseString = string.split("").reverse().join("");

    return reverseString;
  } else {
    return "Field requires a string.";
  }
}

console.log(reverseString("Supercalifragilistico"));
console.log(reverseString("Questa non è una faccina felice. :D"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 8");

const upperFirstPhrase = function (str) {
  let words = str.split(" ");
  let finalString = [];
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0);
    let uppercaseChar = firstChar.toUpperCase();
    let cutString = words[i].slice(1);
    let finalWord = uppercaseChar + cutString;
    finalString.push(finalWord);
  }
  console.log(finalString.join(" "));
};

upperFirstPhrase("hello world");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 9");

const cutString = function (str) {
  return str.slice(1, str.length - 1);
};
console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
};
console.log(giveMeRandom(5));
