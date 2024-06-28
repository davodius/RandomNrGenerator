let x = Math.floor(Math.random() * 10 + 1);
console.log(x);

// npm install prompt-sync - kom ihåg att denna var tvungen att installeras för att följande stycke skulle fungera.
const prompt = require("prompt-sync")();

let repeatsOfGameCounter = 0;
let guessedTheWrongNumber = 0;

while (true) {
  console.log("Press the charachter of your choice to play y/n? ");
  const choice = prompt();

  switch (choice) {
    case "y":
      console.log("Guess a number between 1 and 10 and press enter ");
      if (repeatsOfGameCounter > 0) {
        console.log(
          `This is your ${repeatsOfGameCounter} time playing this game `
        );
      }
      while (true) {
        try {
          let guessednumber = prompt();
          // console.clear(); Kan behövas ifall prompt inte vill overwritas
          // input const choice => let guessednumber

          if (guessednumber == x) {
            guessedTheWrongNumber++;
            console.log(
              `${guessednumber} You are right on the money and you did it on yout ${guessedTheWrongNumber} attempt `
            );
            repeatsOfGameCounter++;

            break;
          }

          if (isNaN(guessednumber)) {
            throw new Error("Det måste vara en siffra");
          } else if (guessednumber > x) {
            console.log(`${guessednumber} Is too big guess again.`);
            guessedTheWrongNumber++;
          } else if (guessednumber < x) {
            console.log(`${guessednumber} Is too small guess again.`);
            guessedTheWrongNumber++;
          }
        } catch (error) {
          console.log("Make sure you wrote a number.");
        }
      }
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
