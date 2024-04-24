

let recipes = ['flour', 'sugar', 'baking powder', 'butter', 'egg', 'water', 'milk'] // elements of the array are strings
const bool = [true, false, true, false, false]

function printResult(student) {
    console.log(student.name + ' scores ' + student.score + '%')
}

function log(str) {
    console.log(str)
};

function addToDocument(item) {
    const li = document.createElement('li')
    li.innerText = item.substring(0, 1).toUpperCase() + item.substring(1)
    document.getElementById('chinchin-list').appendChild(li);
}

const title = 'The recipes for making chinchin are: '
// log(title)
// log(recipes[0]);
// log(recipes[1]);
// log(recipes[2]);
// log(recipes[3]);
// log(recipes[4]);

document.getElementById('title').innerText = title
// addToDocument(recipes[0])
// addToDocument(recipes[1])
// addToDocument(recipes[2])

for(let index=0; index < recipes.length; index++) {
    addToDocument(recipes[index])
    log(recipes[index]);
}

const item = 'salt'
addToDocument(item)


const students = [
    {firstName: 'ismail', lastName: 'ado',  score: 70, gender: 'male'},
    {firstName: 'mahmoud', lastName: 'tukur',  score: 50, gender: 'male'},
    {firstName: 'yusuf', lastName: 'sulaiman',  score: 60, gender: 'male'},
    {firstName: 'binta', lastName: 'salisu',  score: 70, gender: 'female'},
    {firstName: 'rabia', lastName: 'sagir',  score: 70, gender: 'female'},
]

/**
 * The students array holds the result of thpothetical exam for a list of students.
 * Each object holds the name of the student and his/her score.
 * 1. using `if` statement and `for loop` print out the full name (in sentence case) of the student that score above 70 
 * 2. print out the average score e.g. The average score is x, where `x` is the average score.
*/