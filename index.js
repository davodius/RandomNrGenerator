/* let x = Math.floor(Math.random() * 10 + 1);
console.log(x);

console.log("Guess the number");
 */

// npm install prompt-sync - kom ihåg att denna var tvungen att installeras för att följande stycke skulle fungera.
const prompt = require("prompt-sync")();

const username = prompt("What's your name? ");
console.log(`Hello, ${username}!`);
// You can place the rest of your code here

/*
















*/

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
