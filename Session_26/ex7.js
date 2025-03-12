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
    let numberStr =  await input("Ex: 1,2,3,43,2,....");
    let numbers = numberStr.split(",").map(num => parseInt(num.trim()));

    const evens = numbers.filter(num => (num * num) % 2 === 0);
    console.log(evens.map(num => num * num));
}

main();