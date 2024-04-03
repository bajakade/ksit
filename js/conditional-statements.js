// Changes the flow of program execution
// utility functions
// - `typeof` this prints the type of a variable. e.g. typeof 12 => number
// - `substring` it returns part of a given string from a given index until the last
// index excluding the character at the last index
// e.g 'Hello there'.substring(6, 8) => th

function showMessage(message) {
    document.getElementById('greeting').innerText = message
}

function log(message) {
    console.log(message)
}

function utilityExamples() {
    log(typeof 12)
    log('hello there'.substring(6)) // there
    log('hello there'.substring(6, 8)) // th
    log('hello there'.substring(6, 10)) // ther
}

function getSelected() {
    var selectedTime = document.getElementById('time').value;
    var  hour = selectedTime.substring(0, 2)
    var meridian = selectedTime.substring(6) // AM or PM

    if(meridian == 'AM') {
        showMessage('Good morning')
    } else {
        if(+hour <= 4) {
            showMessage('Good afternoon')
        } else {
            showMessage('Good evening')
        }
    }
}

function printGradeMessage() {
    var grade = document.getElementById('grade').value;

    // `!` is used to negate test e.g !true = false and !false = true
    if( grade == '') { 
        document.getElementById('score-message').innerText = 'Please enter your test\'s score';
        return;
    }
    
    var message = 'You scored'
    if(grade >= 70) {
        message = message + ' A'
    } else if(grade >= 60) {
        message = message + ' B'
    }else if(grade >= 50) {
        message = message + ' C'
    }else if(grade >= 40) {
        message = message + ' D'
    } else  {
        message = message + ' E'
    }

    document.getElementById('score-message').innerText = message
}

function highlight() {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'pink'
}



