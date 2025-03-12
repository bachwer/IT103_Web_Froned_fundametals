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
    let numberStr = await input("Ex: 1,2,3,43,2,....");
    let numbers = numberStr.split(",");
    let maxNumber = 0;



    if(numbers.length > 0){

        numbers.forEach(num => {
            if (parseInt(num) > maxNumber) {
                maxNumber = parseInt(num);
            }
        });
        let index = numbers.indexOf(maxNumber);
        console.log(`${index + 1} : ${maxNumber}`);


    }else{
        console.log("invalid")
    }






}
main();