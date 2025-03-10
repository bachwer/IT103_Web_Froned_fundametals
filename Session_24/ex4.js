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


async function showContinueMenu() {
    console.log("\n----- MENU  -----");
    console.log("1. Continue");
    console.log("2. Exit ");
    console.log("-------------------------------------");

    let choice = await input("Enter your choice:");

    if (choice === "1") {
        return true;
    } else if (choice === "2") {
        console.log("exited.");
        return false;
    } else {
        console.log("Try again");
        return await showContinueMenu();
    }
}
async function InputArr(arr, cols, rows){
    for(let i = 0; i < cols; i++){
        arr[i] = [];
        for(let j = 0; j < rows; j++){
            arr[i][j] = +await input("arr[" + (i + 1)+ "][" + (j + 1) + "]");
        }
    }
}

function SumOfElement(arr, cols, rows){
    let sum = 0 ;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
           sum += arr[i][j];
        }
    }
    console.log("Sum: "+sum);
}

function LargestOfElement(arr, cols, rows){
    let max = 0 ;
    let index = [];
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(max < arr[i][j]){
                max = arr[i][j];
                index[0] = i;
                index[1] = j;
            }
        }
    }
    console.log("Largest: " + "arr[" + (index[0] + 1)+ "][" + (index[1] + 1) + "] = "     +max);
}

function AverageArr(arr, cols, rows){
    let temp = [];
    let index = 0;
    for(let i = 0; i < rows; i++){
        let change = 0;
        for(let j = 0; j < cols; j++){
            change += parseInt(arr[i][j]);
        }
        temp[index] = change;
        index++;
    }
    console.table(arr);
    for(let i = 0; i < cols; i++){
        console.log("cols " + i +": " + (temp[i] / rows).toFixed(2));
    }
}

function reverse(arr, cols, rows){
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols / 2; j++){
           let temp = arr[i][j];
            arr[i][j] = arr[i][cols -1 - j]
            arr[i][cols -1 - j] = temp;
        }
    }
    console.table(arr);
}

async function main() {
    let menu;
    let arr = [];
    let cols = 0;
    let rows = 0;
    while (1) {
        console.log("1.Nhập mảng 2 chiều");
        console.log("2.Hiển thị mảng 2 chiều");
        console.log("3.Tính tổng các phần tử trong mảng");
        console.log("4.Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
        console.log("5.Tính trung bình cộng các phần tử của một hàng cụ thể");
        console.log("6.Đảo ngược các hàng trong mảng");
        console.log("7.Exit");

        menu = await input("Enter your choice:");

        switch (menu) {
            case "1":
                cols = +await input("Enter Cols number: ");
                rows = +await input("Enter Rows number: ");
                await InputArr(arr, cols, rows);
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "2":
                if(rows !== 0 && cols !== 0 ){
                    console.table(arr);
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;

            case "3":
                if(rows !== 0 && cols !== 0 ){
                    SumOfElement(arr, cols, rows);
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "4":
                if(rows !== 0 && cols !== 0 ){
                    LargestOfElement(arr, cols, rows);
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "5":
                if(rows !== 0 && cols !== 0 ){
                    AverageArr(arr, cols, rows);
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "6":
                if(rows !== 0 && cols !== 0 ){
                    reverse(arr, cols, rows);
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "7":
                console.log("exited");
                return 0;

        }

    }


}

main();
