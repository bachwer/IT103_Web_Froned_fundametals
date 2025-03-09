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

async function main(){
    let inp = await input("Enter your element Ex: 1,2,3...");
    let arr = inp.split(",");
    let temp = []
    temp[0] = 0;
    temp[1] = 0

    for(let i = 0; i < arr.length; i++){
        if(temp[0] < parseInt(arr[i])){
            temp[1] = temp[0];
            temp[0] = parseInt(arr[i]);
        }else if(temp[1] < parseInt(arr[i])){
            temp[1] = parseInt(arr[i]);
        }
    }

    console.log(temp[1]);
}
main();