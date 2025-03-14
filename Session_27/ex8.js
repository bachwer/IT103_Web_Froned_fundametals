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
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length; j++) {
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr.join(""));
}
async function main() {
    let arr = await input("Ex: 5123: ");

    let arrNumber= arr.split("").map(el => Number(el));
    if(arrNumber.every(Number.isInteger)){
        logic(arrNumber)
    }else{
        console.log("invalid!!");
    }

}
main();