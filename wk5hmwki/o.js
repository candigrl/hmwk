const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
});

rl.question("what is your first name?" , function(firstName) {
    rl.question("what is your last name?" , function(lastName) {
        rl.question("what city do you reside"); {
            console.log(`${firstName} ${lastName}`);
            rl.close();
        }
    });
});
