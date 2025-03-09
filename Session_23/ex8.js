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
    console.log("Enter your element of arr EX: 2,3,4,...")
    let arr = await input("");
    let arReal = arr.split(",");
    let f = [];
    let check = true;
    f[0] = 1;
    f[1] = 1;

    if (parseInt(arReal[0]) === 1 && parseInt(arReal[1]) === 1) {
        for (let i = 2;i < arReal.length ; i++) {
            f[i] = f[i - 1] + f[i - 2];
            if (parseInt(arReal[i]) !== f[i]) {
                check = false;
                break;
            }

        }
    } else {
        check = false;
    }

    if (check === true) {
        console.log("true");
    } else {
        console.log("false");
    }
}
main();