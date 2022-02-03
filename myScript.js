//domande-utente

const userSecondName = prompt("Inserisci il tuo nome")
//console.log(userSecondName);

const userFirstName = prompt("Inserisci il tuo cognome")
//console.log(userFirstName);

const userFavoriteColor = prompt("Dimmi il tuo colore preferito")
//console.log(userFavoriteColor);

const passwordNumber = 21
//console.log(passwordNumber);

const salutoHTMLElement = document.getElementById("password")

//concatenazione elementi
salutoHTMLElement.innerHTML += userSecondName + userFirstName + userFavoriteColor + passwordNumber
