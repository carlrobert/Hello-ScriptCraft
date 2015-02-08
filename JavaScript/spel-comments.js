/* Detta är en funktion för att ta in användarens val, prompt är fönstret som öppnas i webbläsaren*/
function userChoice	() {
	return prompt('Vill du välja, sten, sax eller påse?');
}

/* Den här funktionen avgör datorns val */
function computerChoice	() {
    /* Här deklarerar du en variabel, och tilldelar den värdet Math.random() som kan vara någon mellan 0-1 */
	var randomNumber = Math.random();

    /* En if-else sats för att avgöra datorns val*/
	if (randomNumber <= 0.34) {
		return 'sten';
	} else if (randomNumber <= 0.67) {
		return 'påse';
	} else {
		return 'sax';
	}
}

/* I den här funktionen avgörs vem som vinner eller förlorar med hjälp av if-else satser */
function compare (human, computer) {

    /* Här tilldelar man parametrarna till variabler som ligger innanför funktionen */
    this.human = human;    
    this.computer = computer;

    /* Första if satsen, om t.ex. sten är lika med sten är det oavgjort */
    if (human === computer) {
        return 'Det är lika, ingen av er vinner';
    /* Om användarens val är lika med sten, gör följande */
    } else if (human === 'sten') {
        /* Om användarens val är lika med sten, och datorns val är lika med sax */
        if (computer === 'sax') {
            /* Returnera funktionen message med parameterarna, användarens val, datorns val och sant eftersom användaren vinner */
            return message (human, computer, true);
        } else {
            return message (human, computer, false);
        }
    /* Om användarens val är lika med sax, gör följande */
    } else if (human === 'sax') {
        /* Om användarens val är lika med sax och datorns val är lika med sten */
        if (computer === 'sten') {
            return message (human, computer, false);
        } else {
            return message (human, computer, true);
        }
    } else if (human === 'påse') {
        if (computer === 'sten') {
            return message (human, computer, true);
        } else {
            return message (human, computer, false);
        }
    }
}

/* Funktionen för att returnera ut meddelandet som syns i webbläsaren */
function message (human, computer, humanIsWinner) {
    /* Om t.ex. message (human, computer, true), kommer detta hända */
    if (humanIsWinner === true) {
        return 'Du valde ' + human + ', datorn valde ' + computer + ', du vinner';
    /* Om t.ex. message (human, computer, false), kommer detta hända */
    } else {
        return 'Du valde ' + human + ', datorn valde ' + computer + ', du förlorar';
    }
}

/* Detta kör spelet. */
alert(compare(userChoice(), computerChoice()));
