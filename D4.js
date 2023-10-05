/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 1");

function area(l1, l2) {
  return (area = l1 * l2);
}

console.log("L'area del rettangolo è: " + area(50, 20) + "cm2");

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 2");

function crazySum(n1, n2) {
  if (n1 === n2) {
    return (crazySum = (n1 + n2) * 3);
  } else {
    return (crazySum = n1 + n2);
  }
}

// console.log(crazySum(3, 4)); Il risultato è 7
console.log(crazySum(4, 4)); // Il risultato è 24, pari a (4 + 4) x 3

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 3");

function crazyDiff(n1) {
  if (n1 <= 19) {
    return (crazyDiff = n1 - 19);
  } else {
    return (crazyDiff = (n1 - 19) * 3);
  }
}

// console.log(crazyDiff(18)); Il risultato è -1
console.log(crazyDiff(20)); // Il risultato è 3, pari a (20-19) x 3

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 4");

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return (boundary = true);
  } else {
    return (boundary = false);
  }
}

// console.log(boundary(19)); Il risultato è false perchè il numero non è compreso tra 20 e 100 inclusi.
// console.log(boundary(50)); Il risultato è true perchè il numero è compreso tra 20 e 100 inclusi.
console.log(boundary(400)); // IL risultato è true perchè il numero è 400.

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 5");

function epify(s) {
  if (typeof s === "string") {
    if (s.indexOf("EPICODE") === 0) {
      return (epify = s);
    } else {
      return (epify = "EPICODE" + " " + s);
    }
  } else {
    return "Field requires a string.";
  }
}
// console.log(epify(2)); Displays warning message.
// console.log(epify("EPICODE is awesome")); Returns string as is.
console.log(epify("is awesome")); // Adds EPICODE at the start of the string.

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 6");

function check3and7(n) {
  if (typeof n === "number") {
    if (n % 3 === 0) {
      return (check3and7 = n + " is multiple of 3.");
    } else if (n % 7 === 0) {
      return (check3and7 = n + " is multiple of 7.");
    } else {
      return (check3and7 = n + " is not a multiple of 3 or 7.");
    }
  } else {
    return "Field requires a positive number.";
  }
}

console.log(check3and7(90));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
