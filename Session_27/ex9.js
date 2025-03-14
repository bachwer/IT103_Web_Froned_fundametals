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
    let temp = 0;
   for (let i = 0; i < arr.length; i++) {
       if(arr[i] % 2 === 0){
          for (let j = i + 1; j < arr.length ; j++) {
              temp = arr[i];
              if(arr[j] % 2 === 0 && temp > arr[j]) {
                  arr[i] = arr[j];
                  arr[j] = temp;
              }
          }
       }

   }
   console.log(arr.join(","));
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