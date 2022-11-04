// Generatore Password

// chiedere nome

let Yourname = prompt("Inserisci il tuo nome");

// debug

console.log(Yourname);

// chiedere il cognome

let Surname = prompt("Inserisci il tuo cognome");

// debug

console.log(Surname);

// chiedere colore preferito

let Color = prompt("quale è il tuo colore preferito?")

// debug

console.log(Color);

// numero password

const numberPassword = 21

// compilazione password

let Password = Yourname + Surname + Color + numberPassword;

console.log (Password);

// Collegare html con generatore password

document.getElementById("title").innerHTML = `Congratulazioni , la tua password è : ${Password}`;





