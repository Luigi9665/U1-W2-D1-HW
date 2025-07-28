/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA
 */
console.log(`i principali datatype in javascript sono:
string : un testo inserito all'interno di uno o due apici, sarebbe consigliato usare sempre i due apici per evitare problemi.
number: un valore numerico, che comprende anche quelli decimali.
boolean: possono essere solo true, quindi vero, e false, ovvero falso.
undefined: una variabile che non ha ancora acquisito valore.
null: una variabile alla quale non è stato inserito alcun valore di proposito.`);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "Luigi";
console.log("Il mio nome è: ", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = 12 + 20;
console.log("Somma tra 12 + 20= ", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
myName = "Ventriglia"; */
console.log(`Provando a cambiare il valore alla variabile const myName con il mio cognome il codice si blocca a causa di questo errore:
   D1.js:52 Uncaught TypeError: Assignment to constant variable. at D1.js:52:8`);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Sottrazione tra 4 e la variabile x sopra dichiarata:", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log("name1 è diversa da name2?", name1 !== name2);
console.log(
  "name1 diventa uguale a name2 se entrambe vengono trasformate in lowercase, senza però andare a modificare il valore di name2 che mostreremo in console subito dopo?",
  name1 === name2.toLowerCase()
);
console.log("Mostriamo il valore di name2 che non è stato cambiato:", name2);
