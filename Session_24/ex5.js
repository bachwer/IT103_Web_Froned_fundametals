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

function mainDiagonal(arr, cols, rows){
    let arrFake = arr;
    let temp = 0;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(i !== j){
                arrFake[i][j] =  " ";
            }else{
                temp += parseInt(arrFake[i][j]);
            }
        }
    }
    console.table(arrFake);
    console.log("Sum of main diagonal : " + temp);
}

function secondDiagonal(arr, cols, rows){
    let arrFake = arr;
    let temp = 0;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(i + j === rows - 1){
                arrFake[i][j] =  " ";
            }else{
                temp += parseInt(arrFake[i][j]);
            }
        }
    }
    console.table(arrFake);
    console.log("Sum of second diagonal : " + temp);
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



async function main() {
    let menu;
    let arr = [];
    let cols = 0;
    let rows = 0;
    while (1) {
        console.log("1.Nhập mảng 2 chiều");
        console.log("2.Hiển thị mảng 2 chiều");
        console.log("3.Tính tổng các phần tử trong mảng");
        console.log("4.");
        console.log("5.");
        console.log("6.");
        console.log("7.");

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
                }else{
                    console.log("invalid")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;

            case "3":
                if(rows !== 0 && cols !== 0 ){
                    SumOfElement(arr, cols, rows);
                }else{
                    console.log("invalid")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "4":
                if(rows !== 0 && cols !== 0 && rows === cols){
                    mainDiagonal(arr, cols, rows);
                }else{
                    console.log("invalid")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "5":
                if(rows !== 0 && cols !== 0 && rows === cols){
                    secondDiagonal(arr, cols, rows);
                }else{
                    console.log("invalid")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "6":
                if(rows !== 0 && cols !== 0 ){
                    AverageArr(arr, cols, rows);
                }else{
                    console.log("invalid")
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
