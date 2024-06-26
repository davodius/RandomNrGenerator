/* let x = Math.floor(Math.random() * 10 + 1); - KOMIHÅG
console.log(x); */

// npm install prompt-sync - kom ihåg att denna var tvungen att installeras för att följande stycke skulle fungera.
const prompt = require("prompt-sync")();

console.log("Would you like to play y/n? ");

while (true) {
  let choice = prompt();

  switch (choice) {
    case "y":
      console.log("CHOSE Y ");
      break;

    case "n":
      console.log("The program has been exited. ");
      process.exit();
      break;

    default:
      console.log("You have to write y or n for yes or no. ");
      break;
  }
}

/* console.log("Guess a number between 1 and 10 and press enter ");
while (true) {
  try {
    let guessednumber = prompt();
    //console.log(`Hello, ${guessednumber}!`);

    if (guessednumber == x) {
      console.log(`${guessednumber} You are right on the money.`); - KOMIHÅG
      break;
    }

    if (isNaN(guessednumber)) {
      throw new Error("Det måste vara en siffra");
    } else if (guessednumber > x) {
      console.log(`${guessednumber} Is too big guess again.`);
    } else if (guessednumber < x) {
      console.log(`${guessednumber} Is too small guess again.`);
    }
  } catch (error) {
    console.log("Make sure you wrote a number.");
  }
} */
/*
















*/

//console.log(`Hello, ${guessednumber}!`); - kom ihåg ${guessednumber} så hämtar du det tidigare sparade värdet.

// Denna funkade - Den behövde ej - npm install prompt-sync

/* const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What's your name? ", (username) => {
  console.log(`Hello, ${username}!`);
  // You can place the rest of your code here
  rl.close();
}); */

/*












*/
// Simpel js server för start i webbläsare

/* const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */
