"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!";
document.querySelector(".number").textContent = "?";
document.querySelector(".score").textContent = 20;
document.querySelector(".guess").value = "";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const newScore = function (score) {
  document.querySelector(".score").textContent = score;
};
document.querySelector('body h1').textContent = 'Guess the right number!'
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //When no input number
  if (!guess) {
    // document.querySelector(".message").textContent = "😈No number!";
    showMessage("😈No number!");
    // When player wins
  } else if (guess === secretNumber) {
    showMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // showMessage = document.querySelector(".message").textContent = message <- input is what we pass into the function
      showMessage(guess > secretNumber ? "🤷‍♂️ Too high!" : "🤦‍♂️ Too low!");
      score--;
      // newScore = document.querySelector('.score).textContent = score <- input is what we pass into the function
      newScore(score);
    } else {
      showMessage("💔 You lost the game!");
      document.querySelector('body').style.backgroundColor = "#8B0000";
      newScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Welcome summoner!";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});


const checkDogs = function (dogsJulia, dogsKate){

  let dogsJuliaCopy = dogsJulia.slice(1, -2)
 const dogs = dogsJuliaCopy.concat(dogsKate);

 dogs.forEach((dog, index) => {
   if(dog >= 3){
     console.log(`Dog number ${index + 1} is an adult, and is ${dog} years old`)
   }else{
     console.log(`Dog number ${index + 1} is still a puppy `)
   }
 });
}
checkDogs([3,5,2,12,7], [4,1,15,8,3])


const createUsernames = ((accs) => {
  accs.forEach(acc => {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('')
  });
})
createUsernames(accounts)

const withdrawals = movements.filter(el => {
  return el < 0;
})

console.log(withdrawals)

const movements = [200,450,-400,3000, -650, -130, 50]

const maxValue = movements.reduce((acc, currEl) => {
if(acc < currEl) acc = currEl;
return acc;
}, movements[0])
console.log(maxValue)
*/


// const calcAverageHumanAge = (ages) => {
// const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
// const adults = humanAges.filter(age => age >= 18);
// console.log(humanAges);
// console.log(adults);

// const average = adults.reduce((acc, age, i, arr) => {
// acc + age / arr.length;
// }, 0)
// console.log(average) ;
// }
// calcAverageHumanAge([5,2,4,1,15,8,3])


// const calcAverageHumanAgeArrow = (ages) => 
// ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18).reduce((acc, age, i, arr) => 
// acc + age / arr.length
// , 0)


// const avg1 = calcAverageHumanAgeArrow([5,2,4,1,15,8,3])
// console.log(avg1)

// const s = Array.from({length: 6}, (_, i) => i + 1 + Math.random().toFixed(0));
// console.log(s)

const dogs = [{
  weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
  {weight: 8, curFood: 200, owners: ['Sarah', 'John']},
  {weight: 32, curFood: 340, owners: ['Michael']}
]
// 1.
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs)

// 2.
const dogSarah = dogs.find(dog =>  dog.owners.includes('Sarah'));
console.log(dogSarah)
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`)

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4. 
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle}.join(' and ')'s dogs eat too little!`)

// 5.
const exactlyAmount = dogs.some(dog => dog.recFood == dog.curFood);
console.log(exactlyAmount)

// 6.
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay))

// 7.
console.log(dogs.filter(checkEatingOkay))

// 8.
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogSorted)

  
