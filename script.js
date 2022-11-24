const button = document.querySelector('button');

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
})