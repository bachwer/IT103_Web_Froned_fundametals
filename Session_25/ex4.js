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
    let check = true;

       for(let i = 2; i < parseInt(str); i++){
           if(parseInt(str) % i === 0){
               check = false;
               break;
           }
       }

   if(check === true){
       console.log("True");
   }else{
       console.log("False");
   }
}


async function main() {
    let pass = +await input("Enter Your number");


    checkPassword(pass);

}

main();