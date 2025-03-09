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

async function main() {
    let arr = ["JavaScript", 0, null, true, 7, "", false, undefined, "Hello", NaN];
    let filteredArr = arr.filter(value => value);

    console.log(filteredArr);
    
}
main();