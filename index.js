// Requred dependencies
var read = require('readline-sync');
var score = 0;
var wrongAns = 0;
var correctAns = 0;

// Current player Data
var currentUser = {
  userName: "AnonymousPlayer",
  // score: 0, 
};

// Data of high score
var highScores = [
  { name: "1. HarryStyle", score: 9, },
  { name: "2. Harikesh Patel", score: 7, },
];

// Data for GamePlay
// Options
const q1 = `a) Ultron
b) Thanos
c) Gorr
d) None \n\n`
const q2 = `a) He Who Remains
b) Thanos
c) Gorr \n\n`
const q3 = `a) Super-Skrull
b) Ronan The Accuser
c) Ego The Living Planet
d) All \n\n`
const q4 = `a) Josh Brolin
b) Cate Blanchett
c) Christian Bale \n\n`
const q5 = `a) Captain America
b) Iron Man
c) Loki \n\n`
const q6 = `a) ALEXA
b) GOOGLE ASSISTANT
c) J.A.R.V.I.S \n\n`
const q7 = `a) Adamantium
b) Vibranium
c) Promethium
d) Carbonadium \n\n`
const q8 = `a) The Chitauri
b) The Skrulls
c) The Kree
d) The Flerkens \n\n`
const q9 = `a) Neurosurgeon
b) Cardiothoracic Surgeon
c) Trauma Surgeon
d) Plastic Surgeon \n\n`
const q10 = `a) The Russo Brothers
b) Christopher Nolan
c) None \n\n`
const q11 = `a) A security card, a fork, and an ankle monitor
b) A pair of binoculars, a detonator, and a prosthetic leg
c) A security band, a battery, and a prosthetic leg \n\n`
const q12 = `a) Nebula
b) Ebony Maw
c) Cull Obsidian
d) Gamora \n\n`

var QAlist = [
  { question: "1. Who is SuperVillain in 'Avengers: Infinity War'? \n\n" + q1, answer: "b" },
  { question: "2. Who was behind the TVA in 'Loki'? \n\n" + q2, answer: "a" },
  { question: "3. Who is the bad guy in 'Guardians of the Galaxy'? \n\n" + q3, answer: "d" },
  { question: "4. Who played the role of SuperVillain in 'Thor: Love & Thunder'? \n\n" + q4, answer: "c" },
  { question: "5. Which SuperHero is died in 'Avengers: End Game'? \n\n" + q5, answer: "b" },
  { question: "6. What is the name of Iron Mans AI Bot? \n\n" + q6, answer: "c" },
  { question: "7. What is Captain America’s shield made of? \n\n" + q7, answer: "b" },
  { question: "8. What is the alien race Loki sends to invade Earth in The Avengers? \n\n" + q8, answer: "a" },
  { question: "9. What type of doctor is Stephen Strange? \n\n" + q9, answer: "a" },
  { question: "10. Who has directed the most MCU movies? \n\n" + q10, answer: "a" },
  { question: "11. What were the three items Rocket claims he needs in order to escape the prison? \n\n" + q11, answer: "c" },
  { question: "12. Whom does the Mad Titan sacrifice to acquire the Soul Stone? \n\n" + q12, answer: "d" },
];

// Titlize user name
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

// Intro function
function welcome() {
  var user = read.question("Hi there! Please enter your name : ");
  var input = read.question("\nWould you like to play a game called 'DO YOU KNOW MCU' (Y/N) : ");

  if (user !== "") {
    currentUser.userName = user;
  }
  currentUser.userName = titleCase(currentUser.userName);
  if (input.toUpperCase() === "YES" || input.toUpperCase() === "Y") {
    console.log("\nEnter 'a' or 'b' or 'c' or 'd' as your answer accordingly..");
    console.log("\nHurrah!! here we go " + currentUser.userName + "....\n\n")
  } else {
    console.log("\nLets play only once " + currentUser.userName + ".")
    console.log("Enter 'a' or 'b' or 'c' or 'd' as your answer accordingly..");
    console.log("\nHere we go " + currentUser.userName + "....\n\n")
  }
};

// play function
function play(question, answer) {

  var userAnswer = read.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\nGood Job!");
    correctAns = correctAns + 1;
    score = score + 1;
  } else if (userAnswer === "") {
    console.log("\nNo Selection!");
  } else {
    console.log("\nNice Try!");
    wrongAns = wrongAns + 1;
  }
  console.log("\nWrong Answers : ", wrongAns);
  console.log("Correct Answers : ", correctAns);
  console.log("Current Score : ", score);
  console.log("---------------------\n\n")
}

// GamePlay function
function gamePlay() {
  for (const QA of QAlist) {
    play(QA.question, QA.answer)
  }
}

// Result function

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function showScores() {
  await sleep(3000);
  console.log("-:)  -:)   -:)    -:)     -:)      -:)        -:)\n\n");
  await sleep(2000);

  console.log("Wow! " + currentUser.userName + " you have SCORED to", score, "/", 12);
  await sleep(5000);
  console.log("\nPlease check out the high scores below. If you should be there plz mail me (harikeshpatel24@gmail.com) your high score screenshot, I'll update it and will let you know.\n");
  await sleep(2000);
  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log("\n");
}


welcome();
gamePlay();
showScores();
