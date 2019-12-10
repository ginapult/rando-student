'use strict';

console.log('connected!');



var students = [
  'Andrew',
  'Susana',
  'Blandine',
  'Matthew',
  'Kim',
  'Patrick',
  'Robert',
  'Harlen',
  'Ken',
  'Eyob',
  'Eugene'
];


function randoStudent(array){
  console.log('randoStudent is running!');
  if(!array) {
    return('No students here.')
  }
  else {
    let randoStudentArray = [];
    let randoNumsUsed = [];
    for (let i = 0; i < array.length; i++) {
      let randoNum = Math.floor(Math.random() * array.length);
      while (randoNumsUsed.includes(randoNum)) {
        randoNum = Math.floor(Math.random() * array.length);
      }
      randoNumsUsed.push(randoNum);
      randoStudentArray.push(array[randoNum]);
      }
      console.log (randoStudentArray);
      return randoStudentArray;
    };
  };

  var randoStudentsOutput = randoStudent(students);

function pairStudents(array) {
  let studentPairsArray = [];
  let pair = []
  for (let i = 0; i < array.length; i+=2) {
    pair.push(array[i]);
    pair.push(array[i+1]);
    // if last pair[1]=undefined, then push last pair[0] to studentPairsArray[studentPairsArray.length -1]
    if (pair[1] === undefined) {
      studentPairsArray[studentPairsArray.length -1].push(pair[0]);
    } else {
      studentPairsArray.push(pair);
    }
    pair = [];
    }
  console.log(studentPairsArray);
  return studentPairsArray;
};

var pairedStudentsOutput = pairStudents(randoStudentsOutput);

// DOM manipulation

function renderPairs(array) {
  for (let i = 0; i < array.length; i++) {
    let string = "";
    for (let j = 0; j < array[i].length; j++) {
      if (j === 0) {
        string = string + array[i][j]
      } else {
        string = string + " & " + array[i][j];
      }
    }
    var pairsHolder = document.getElementById('pairs-holder');
    var newLi = document.createElement('li');
    newLi.textContent = string;
    pairsHolder.appendChild(newLi);
    console.log(string);
  }
}

renderPairs(pairedStudentsOutput);



  
