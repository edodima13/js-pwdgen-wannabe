const userSecondName = prompt("Inserisci il tuo nome")
console.log(userSecondName);

const userFirstName = prompt("Inserisci il tuo cognome")
console.log(userFirstName);

const salutoHTMLElement = document.getElementById("saluto")

salutoHTMLElement.innerHTML += userSecondName + ' ' + userFirstName

