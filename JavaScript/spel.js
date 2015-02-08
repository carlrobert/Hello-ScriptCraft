function userChoice	() {
	return prompt('Vill du välja, sten, sax eller påse?');
}

function computerChoice	() {
	var randomNumber = Math.random();

	if (randomNumber <= 0.34) {
		return 'sten';
	} else if (randomNumber <= 0.67) {
		return 'påse';
	} else {
		return 'sax';
	}
}

function compare (human, computer) {
    this.human = human;    
    this.computer = computer;

    if (human === computer) {
        return 'Det är lika, ingen av er vinner';
    } else if (human === 'sten') {
        if (computer === 'sax') {
            return message (human, computer, true);
        } else {
            return message (human, computer, false);
        }
    } else if (human === 'sax') {
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

function message (human, computer, humanIsWinner) {
    if (humanIsWinner === true) {
        return 'Du valde ' + human + ', datorn valde ' + computer + ', du vinner';
    } else {
        return 'Du valde ' + human + ', datorn valde ' + computer + ', du förlorar';
    }
}

alert(compare(userChoice(), computerChoice()));
