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
function evens(n){
    if(n % 2 === 0) return n;
}


async function main() {
    let numberStr =  await input("Ex: 1,2,3,43,2,....");
    let numbers = numberStr.split(",").map(num => parseInt(num.trim()));
    let total = 0;
    let total2 = 0;

    if(numbers.length > 0) {
        let totalEvens = numbers.filter(num => evens(num));
        total = totalEvens.reduce((sum, num) => sum + num, 0);


        let totalOdd = numbers.filter(num => !evens(num));
        total2 = totalOdd.reduce((sum, num) => sum + num, 0);
        if(!isNaN(total) && !isNaN(total2)){
            console.log("totalEvens :"+total);
            console.log("totalOdd :"+total2);
        }else{
            console.log("invalid number");
        }
    }else{
        console.log("invalid number");
    }








}

main();