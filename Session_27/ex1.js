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


function sum(a , b){
    let total = parseInt(a)+ parseInt(b);
    console.log( "Sum:  " + total);
}

function minus(a, b){
    let total = parseInt(a) - parseInt(b);
    console.log( "Minus:  " + total);
}

function divide(a, b){
    let total = parseInt(a) / parseInt(b);
    console.log( "divide:  " + total);
}
function multiply(a, b){let total = parseInt(a) * parseInt(b);

    console.log( "multiply:  " + total);
}


async function main(){


    while (1){
        console.log("1.Cộng hai số.")
        console.log("2.Trừ hai số")
        console.log("3.Nhân hai số.")
        console.log("4.Chia hai só.")
        console.log("5.Thoat.")

        let menu = await input("Enter your choice:");

        let a = +await input("Enter number a:");
        let b = +await input("Enter  number b:");



        switch (menu) {
            case "1":
                sum(a,b);
                break
            case "2":
                minus(a,b);
                break
            case "3":
                multiply(a,b);
                break
            case "4":
                divide(a,b);
                break
            case "5":
                console.log("exited")
                return 0;

            default:
                console.log("invalid");
                break;
        }
    }



}
main();