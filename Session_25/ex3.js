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
    let arr = str.split(",")
    let arr2 = [];
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) % 2 === 0) {
            arr2[index] = arr[i];
            index++;
        }
    }
    console.log(arr2.join(" "));

}


async function main() {
    let pass = await input("Ex: 1,3,4,...");


    checkPassword(pass);

}

main();