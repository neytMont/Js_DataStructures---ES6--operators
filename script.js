'use strict';
//===============================================================================================================
// Coding Chanllenge 1
//===============================================================================================================
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',

  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
const [players1, players2] = game.players;
console.log(players1); //Array(11)
console.log(players2); //Array(11)

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
const [gk, ...fieldPlayers] = players1; //using rest
console.log(gk); //Neuer
console.log(fieldPlayers); //Array(10)

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
const allPlayers = [...players1, ...players2]; //Array(22)
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; //Array(14)
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
const printGoals = function (...goalsMade) {
  console.log(`${goalsMade.length} goals were scored.\nScorers:`);
  for (const ele of goalsMade) {
    console.log(ele);
  }
  // const goals = {}; //makes a new object
  // goalsMade.forEach((ele) => {
  //   //for each element(players), increment the goals for the player by 1 or initialize it to 1
  //   goals[ele] = (goals[ele] || 0) + 1;
  // });
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//===============================================================================================================
//===============================================================================================================
console.log(
  '===================================================================='
);
//===============================================================================================================
//Coding Challenge 2
//===============================================================================================================
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

console.log("----------------Jonas' Solution----------------");
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
const bettingOdds = Object.values(game.odds);
let aveOdds = 0;
for (const ele of bettingOdds) aveOdds += ele;
console.log(aveOdds, bettingOdds.length);
console.log(`The average odd: ${aveOdds / bettingOdds.length}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
console.log("----------------Jonas' Solution----------------");
for (const [team, odd] of Object.entries(game.odds)) {
  const ans = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${ans}: ${odd}`);
}
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
const scorers = {};
for (const ele of game.scored) {
  scorers[ele] = scorers[ele] ? (scorers[ele] += 1) : 1; //if the scorer is already in add 1 instead of making a new property
}
console.log(scorers);

//===============================================================================================================
//===============================================================================================================

//===============================================================================================================
//Coding Challenge 3
//===============================================================================================================
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
//Map(11)
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
const [...events] = new Set(gameEvents.values()); //Array (4) ['⚽️ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card']
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64); //Map(10)
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
const [...gameEventKeys] = gameEvents.keys(); //deconstructing the keys to an array of minutes
let ave = []; //get the difference of events in minutes

//starting from the last event to 0 min(start of match)
for (let i = gameEventKeys.length - 1; i >= 0; i--) {
  for (let j = i - 1; j >= 0; j--) {
    ave.push(gameEventKeys[i] - gameEventKeys[j]);
    break;
  }
}
ave.push(gameEventKeys[0] - 0); //from 0 to 17

let tempAve = 0; //the sum of all difference
for (const ele of ave) {
  tempAve += ele;
}
console.log(
  `An event happened on average, every ${Math.trunc(
    tempAve / ave.length
  )} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
for (const [key, value] of gameEvents)
  console.log(`[${key < 45 ? '1st HALF' : '2ND HALF'}] ${key}: ${value}`);
