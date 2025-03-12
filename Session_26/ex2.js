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
    let worldStr =  await input("Ex: apple,banana,watermelon,...");
    let world = worldStr.split(",");

   if(world.length > 0){
       const evens = world.filter(word => word.length >  5);
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