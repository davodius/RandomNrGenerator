/* let x = Math.floor(Math.random() * 10 + 1);
console.log(x);

console.log("Guess the number");
 */

/* const prompt = require("prompt-synq")({ sigint: true });

console.clear();

let first_name, last_name, username, age;

first_name = String(prompt("Enter first name"));
console.clear();

last_name = String(prompt("Enter last name"));
console.clear();

username = String("Enter username");
console.clear();

age = Number("Enter age");
console.clear();

let userInfo = `Full name: ${first_name} ${last_name}\nUsername: ${username}\nAge: ${age}`;
console.log("User Profile\n");
console.log(userInfo); */

/* let username = console.readline("whats ur name?");
console.log(username); */

// npm install prompt-sync - kom ihåg att denna var tvungen att installeras för att följande stycke skulle fungera.
const prompt = require("prompt-sync")();

const username = prompt("What's your name? ");
console.log(`Hello, ${username}!`);
// You can place the rest of your code here

// Denna funkade
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

// Kom ihåg Code runner för play knapp
// Simpel js server för webbläsare
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
