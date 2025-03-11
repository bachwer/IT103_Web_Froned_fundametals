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
    if (typeof str !== "string") {
        console.error("Lỗi: Đầu vào không phải là chuỗi!");
        return;
    }

    let arr = str.split(",");
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i], 10);

        if (!isNaN(num) && num > 0) {
            arr2.push(arr[i]);
        }
    }

    console.log(arr2.join(" "));
}


async function main() {
    let pass = await input("Enter your number Ex: 2, 3, 1, 2..");


    checkPassword(pass);

}

main();