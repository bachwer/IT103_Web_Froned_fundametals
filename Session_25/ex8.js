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

async function checkPassword(password) {
    let checkNumber = false
    let checkCharacter = false;
    let checkLower = false;



    if(password.length > 7) {
        checkNumber = /\d/.test(password);
        checkCharacter = /[A-Z]/.test(password);
        checkLower = /[a-z/.]/.test(password);
    }
    if(checkCharacter === true && checkNumber === true && checkLower === true) {
        console.log("true")
    }else{
        console.log("false")
    }


}
async function main() {
    let pass = await input("Enter your String");

    await checkPassword(pass);
}

main();