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
    let n = arr[1] - arr[0];
    let check = true;
    for (let i = 0; i < arr.length - 1; i++) {
       if(arr[i + 1] - arr[i] === n){
           check = true;
       }else{
           check = false;
           break;
       }
    }
    if(check === false){
        console.log("False");
    }else{
        console.log("True");
    }
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