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
function isPrime(n){
    if( n < 2) return false;

    for(let i = 2; i * i <= n; i++){
        if(n % i === 0) return false;
    }

    return true;
}


async function main() {
    let numberStr =  await input("Ex: 1,2,3,43,2,....");
    let numbers = numberStr.split(",");


    if(numbers.length > 0){
        const evens = numbers.filter(num => isPrime(num)  );
        if(evens.length > 0){
            console.log(evens);
        }else{
            console.log("invalid")
        }
    }else{
        console.log("invalid")
    }





}

main();