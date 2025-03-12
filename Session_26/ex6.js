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
function arr(string) {
    let arr = string.split("-");
    let temp = arr[0]
    arr[0] = arr[2]
    arr[2] = temp;

    return arr.join("/");
}



async function main() {
    let numberStr = await input("Ex:2025-03-10, 2024-12-25,..:");
    let Date = numberStr.split(",");

    let date= Date.map(arr);

    console.log(date);

}
main();