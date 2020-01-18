'use strict';

function randoPairMe () {

// get array of students
var students = [
  'Blandine',
  'Ken',
  'Matthew',
  'Jin',
  'Andrew',
  'Harlen',
  'Eugene',
  'Robert',
  'Vij',
  'Ally',
  'Cait',
  'Tyler',
  'Cindy'
];

console.log('original array: ', students);

// randomize array of students
for (let i = students.length -1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = students [i];
  students[i] = students [j];
  students[j] = temp;
}
console.log('randomized array: ', students);

// pair random array
let pairedStudents = students.reduce((result, value, index, array) => {
  if (index % 2 === 0)
  result.push(students.slice(index, index + 2));
  return result;
}, []);

console.log('pairedStudents array: ', pairedStudents);

if (pairedStudents.length % 2 !== 0) {
  console.log('not even');
}

// print pair to DOM
let pairsHolder = document.getElementById('pairs-holder');

pairedStudents.forEach( pair => {
  let newLi = document.createElement('li');
  if (pair.length === 2) {
    newLi.textContent = `${pair[0]} & ${pair[1]}`;
  } else {
    newLi.textContent = `${pair[0]}`;
  }
  pairsHolder.appendChild(newLi);
})
}

randoPairMe();

// click event to clear and re-render the pairs-holder
document.getElementById('button').addEventListener('click', function(){
  location.reload();
})
