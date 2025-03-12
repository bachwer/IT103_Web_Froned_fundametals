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
    let gmail =  await input("Ex: john.doe@gmail.com, john.doe@gmail.com ,john.doe@gmail.com,....");
    let world = gmail.split(",");

    if(world.length > 0){
        const evens = world.filter(email => email.includes("@") && !email.includes(" "));
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