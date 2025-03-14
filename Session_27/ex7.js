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

function logic(arr) {

    let check = true;
    let n = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i + 1] !== (arr[i] + 1)){
            arr[i + 1] = (arr[i] + 1);
            n = arr[i] + 1;
        }
    }
       console.log(n);
}
async function main() {
    let arr = await input("Ex: 1,2,3,4,..: ");

    let arrNumber= arr.split(",").map(el => Number(el));
    if(arrNumber.every(Number.isInteger)){
        logic(arrNumber)
    }else{
        console.log("invalid!!");
    }

}
main();