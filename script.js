const button = document.querySelector('button');
const emails = [
    'gino1@gmail.com',
    'gino2@hotmail.com',
    'gino2000@hotmail.com',
    'gino99@gmail.com',
    'gino69@outlook.com',
    'gino1@gmail.com',
    'gino1@gmail.it'
];

button.addEventListener('click', function(){
    let diceUser = document.getElementById("diceUser").value;
    let dice = Math.floor(Math.random() * 6) + 1;

    if (diceUser <= 6) {
        console.log(diceUser);
        console.log(dice);
        if (diceUser > dice){
            document.querySelector("h1").innerHTML = "Hai vinto! Al PC è uscito il numero " + dice + ".";
        } else if (diceUser == dice) {
            document.querySelector("h1").innerHTML = "Pareggio! Al PC è uscito il numero " + dice + ".";
        } else {
            document.querySelector("h1").innerHTML = "Hai perso! Al PC è uscito il numero " + dice + ".";
        }
    } else {
        document.querySelector("h1").innerHTML = "Hai inserito un numero superiore a 6! Hai perso!";
    }
    
    const userMail = document.getElementById("mailUser").value;
    let mailFound = false;
    
    for (let i = 0; i < emails.length; i++) {
        if (userMail == emails[i]) {
            mailFound = true;
        }
    }
    
    if (mailFound) {
        document.querySelector("h1.mail").innerHTML = "La mail " + userMail + " ha i permessi.";
    } else {
        document.querySelector("h1.mail").innerHTML = "La mail " + userMail + " non ha i permessi.";
    }
})


