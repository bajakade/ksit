// Number
// operations on number
var result = 3 + 5

console.log(result)

// we can equally directly print an expression
console.log(10 + 1)

// you can euqally print multiple expression separated by comma
console.log("The sum of 1 and 2 is",  1 + 2)
console.log("The difference between 8 and 3 is",  8 - 3);

console.log( 2 * 5)
console.log('The division of 100 by 25 is', 100/25)

var num1 = 10
var num2 = 4

console.log(num1 - num2);

// the modulus of a number is the reminder after division of that numer
var num3 = 20, num4 = 3

console.log('The moduls', num3%num4) // remainder of 20/3 is 2

// power of a nubmer
console.log('The power of 2 to 3 expressed by 2 ** 3 is', 2**3)

// Famous BODMAS
var res = (10 - 6) * 10 + 2
console.log(res)


// string data type
var str = 'Hello';
var message = "World"

var concat = str + ' ' + message
console.log(concat)

console.log('Hello students, welcome to the FE class')

var sentence = "He's a boy"
console.log(sentence)

// escape special character
sentence = 'She\'s a girl'
console.log(sentence)

// string length
console.log(sentence.length)

// new line espace sequence
var compoundSentence = 'He is a boy.\nShe is a girl';
console.log(compoundSentence)




// array type
// is a collection of variables handled as a single
var numArray = [2, 4, 6, 8, 10]; // list of even numbers between 1 and 10
var colors = ['blue', 'green', 'red', 'yellow']; // color names - array of string

// accessing array member
// arrays are zero-indexed
console.log(numArray[0]) // first element/member of the array
console.log(numArray[5]) // third element/member of the array


console.log(colors[3])

// an object has a key=> value attributes
var person = {name: 'John Doe', gender: 'Male', height: 1.7}
console.log(person['name'], person['gender'], person['height'])

// Members of an array can be of any data type
var persons = [person, {name: 'Alice', gender: 'Female', height: 1.5}]
console.log(persons[0])
console.log(persons[1])
console.log(persons[2])

// the maximum index is `size_of_array - 1`
// What happens when you try to access an unexisting index
console.log(persons.length)












