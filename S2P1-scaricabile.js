//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 5
let y = 10
if (x > y) {
  console.log(x + "è maggiore di " + y)
} else {
  console.log(y + "è maggiore di " + x)
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 4
if (num < 5) {
  console.log("Tiny")
} else if (num < 10) {
  console.log("Small")
} else if (num < 15) {
  console.log("Medium")
} else if (num < 20) {
  console.log("Large")
} else if (num >= 20) {
  console.log("Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let x = 0; x <= 10; x++) {
  if ((x === 3) || (x === 8)) { 
    continue;
  }
  console.log(x)
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
for (let x = 0; x <= 15; x++) {
  if (x % 2 === 0) {
    console.log("Pari")
  } else {
    console.log("Dispari")
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let z = 6
let k = 2
if ((z === 8) || (k === 8)) {
  console.log("Uno dei due numeri vale 8")
} else if (z + k === 8) {
  console.log("La somma dei due numeri vale 8")
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = parseFloat(prompt("Totale carrello"))
let shipping = 10
let finalPrice = totalShoppingCart + shipping
if (totalShoppingCart > 50) {
  finalPrice = totalShoppingCart
  alert("Congrats! Free shipping!" + " " + "Il costo totale è:" + finalPrice + "€")
  
} else {
  finalPrice = totalShoppingCart + shipping
  alert("Spese di spedizione: 10€" + " " + "Il costo totale è: " + finalPrice + "€")
}


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
totalShoppingCart = totalShoppingCart - (totalShoppingCart * 0.20) 
if (totalShoppingCart > 50) {
  finalPrice = totalShoppingCart
  alert("Congrats! Free shipping!" + " " + "Il costo totale è:" + finalPrice + "€")
  
} else {
  finalPrice = totalShoppingCart + shipping
  alert("Spese di spedizione: 10€" + " " + "Il costo totale è: " + finalPrice + "€")
}

 

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let gender
let isMale = true
gender = isMale ? (gender = "male") : (gender = "female")
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (ab = 0; ab <= 100; ab++) {
  if ((ab % 3 === 0) && (ab % 5 === 0)) {
    console.log("FizzBuzz")
  } else
  if (ab % 3 === 0) {
      console.log("Fizz")
  } else 
  if (ab % 5 === 0) {
    console.log("Buzz")
  }  else 
  console.log(ab)
}