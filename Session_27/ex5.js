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
function detachedArr(arrNumber, n){
    let index = 0 ;
    let indexArr = 0;
    let arr = [];
   for(let i = 0; i < arrNumber.length; i++){
       arr[indexArr] = "";
       for(let j = i; j < n + i; j++){
           if(j < arrNumber.length){
               arr[indexArr] += arrNumber[j];
               index = j;
           }else{
               break;
           }
       }
       i = index;
       indexArr++;

   }
    console.log(arr.join("  "));
}



async function main(){
    let arr = await input("Ex: 1,2,3,4,..: ");

    let arrNumber= arr.split(",").map(el => Number(el));
    if(arrNumber.every(Number.isInteger)){
        let n = + await input("Size of array");
        detachedArr(arrNumber, n);
    }else{
        console.log("invalid!!");
    }


}
main();