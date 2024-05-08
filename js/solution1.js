const students = [
    {firstName: 'ismail', lastName: 'ado',  score: 70, gender: 'male'},
    {firstName: 'mahmoud', lastName: 'tukur',  score: 50, gender: 'male'},
    {firstName: 'yusuf', lastName: 'sulaiman',  score: 60, gender: 'male'},
    {firstName: 'binta', lastName: 'salisu',  score: 70, gender: 'female'},
    {firstName: 'rabia', lastName: 'sagir',  score: 70, gender: 'female'},
];


// Q1.
students.forEach(student => {
    if(student.score >= 70) {
        const p = document.createElement('p');
        p.innerHTML = `My name is ${toSentenceCase(student.firstName)} 
            ${toSentenceCase(student.lastName)} 
            and my score is ${student.score}`;
        
        appendTo('result', p);
    }
})

// Q2
let totalScore = 0;
for(let i = 0; i < students.length; i++) {
    totalScore = totalScore + students[i].score;
}

const averageStatement = 'The average students score is ' + totalScore/students.length;
const p = document.createElement('P');
p.style.color = 'green';
p.style.padding = '13px';
p.style.border = 'solid 2px yellow';


p.innerText = averageStatement;

appendTo('result', p);