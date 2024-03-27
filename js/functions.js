
//    var p1 = document.getElementById('p1')
    // a function a way to group multiple statement into a single unit for reuse
    function sum(x, y) {
        var statement = 'The sum of ' + x  + ' and ' + y + ' is ';
        // in js statement are evalauted from right to left
        return statement + (x + y)
    }
    var colors = ['Red', true, {name:'John'}, 33];
    console.log(colors[0])
    console.log(colors[1])
    console.log(colors[2]['name'])
    console.log(colors[3])

    function showMessage() {
        // getElementsByName returns a list (collection of) elements
        // th below statemeent  will reeturn an array of single elemente e.g ['input']
        var names = document.getElementsByName('name')
        var age = document.getElementById('age').value
        document.getElementById('ans').innerText = "Your name is " + names[0].value + ' and you\'re ' + isAdult(age);
        document.getElementById('p1').style.color = 'green';
    }

    function isAdult(age) {
       if(age > 18) {
            return 'an adult'
       } else {
            return 'a minor'
       }
    }


    // Note js is a dynamic typed language. This implies that a variable can be reassigned a different type value
    var adult = true; // type boolean
    
    if (adult) {
        console.log('Yes an adult')
    }

    adult = 'Adult'; // string

    var another  = 'He is an ' + adult;

    console.log(another)

    adult = 5 // number
    console.log( 1 + adult)