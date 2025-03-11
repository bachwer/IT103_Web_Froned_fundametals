const readline = require('readline');

function input(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question + " ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

function checkPassword(str) {
    let arr = str.split("").reverse().join("");

    return arr === str;








}
async function main() {
    let pass = await input("Enter your String");



    console.log(checkPassword(pass));
}

main();