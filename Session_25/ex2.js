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
    let check = true;
    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        if(!isNaN(parseInt(arr[i]))) {
            temp += parseInt(arr[i]);
        }else{
            check = false;
            break;

        }
    }
    if(check === false){
        console.log("invalid");
    }else{
        console.log("sum: " +temp);
    }

}


async function main() {
    let pass = await input("Ex: 1,3,4,...");


    checkPassword(pass);

}

main();