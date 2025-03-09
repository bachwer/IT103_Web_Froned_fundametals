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
    let inp = await input("Enter your element Ex: 1,2,3...");
    let arr = inp.split(",");
    let indexNumber = 0;
   if(arr.length > 0){
       for(let i = 0; i < arr.length; i++){
           if(!isNaN(Number(arr[i])) &&(arr[i] !== "" )){
               indexNumber++;
           }
       }
       console.log("Number of elements is " + indexNumber);
   }else{
       console.log("Don't have any numbers");
   }
} 

main();
