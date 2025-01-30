//If you want to run the script in VS Code (Node.js environment), you need to use the readline module:
//How It Works:
//Uses readline to get user input in Node.js.
//Calls rl.question() to prompt the user.
//If input is empty, it defaults to "Guest".
//Uses console.log() instead of alert() (since alerts don’t work in Node.js)

//The prompt() function is part of the browser environment and does not work in Node.js (which is what VS Code typically runs by default).

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const greetUser = function() {
    rl.question("Please enter your name: ", (name) => {
        name = name.trim() ? name : "Guest";
        console.log(`Hello, ${name}!`);
        rl.close();
    });
};

greetUser();
