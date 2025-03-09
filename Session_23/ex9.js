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
//function input Element arr;
async function arrInput(n, arr) {
    for (let i = 0; i < n; i++) {
        arr[i] = await input("arr[" + (i + 1) + "] = ");
    }
}
//function print even number and sum;
async function evenNumber(n, arr, subArr){
    let index = 0;
    let temp = 0;
    for(let i = 0; i < n; i++) {
        if(parseInt(arr[i]) % 2 === 0){
            subArr[index] = arr[i];
            temp += parseInt(subArr[index]);
            index++;

        }
    }

    console.log(subArr.join(" "));
    console.log("sum even element: " + temp);
}
// value max and min;
async function valueMaxMin(n, arr) {
    let min = arr[0];
    let max = 0;

    for(let i = 0; i < n; i++) {
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    }

    console.log("Max: "+max);
    console.log("Min: "+min);
}
// function print number prime and sum;
async function numberPrime(n, arr, subArr) {
    let index = 0;
    let temp = 0;
    for(let i = 0; i < n; i++) {
        let check = true;
        for(let j = 2; j < arr[i]; j++) {
            if(arr[i] < 2){
                check = false;
            }else{
                if(parseInt(arr[i]) % j === 0){
                    check = false;
                }
            }
        }
        if(check === true){
            subArr[index] = parseInt(arr[i]);
            temp += subArr[index];
            index++;
        }
    }
    console.log(subArr.join(" "));
    console.log("sum even element: " + temp);
}

async function checkNumberRepeat(n, arr){
    let check = await input("Enter your value");
    let checkin = false;
    let index = 0;
    for(let i = 0; i < n; i++){
        if(check === arr[i]){
            index++;
            checkin = true;
        }
    }
    if(check === true){
        console.log("Repeat: " + index);
    }else{
        console.log("Don't have element: " + check);
    }
}

async function addElement(n , arr){
    let pos = +await input ("Enter position want to add")
    let value = +await input("Enter value of element");
    pos--;
    arr.splice(pos, 0 , value);
    console.log(arr.join(" "));
}



let n;
async function main() {
let arr = [];
let subArr = [];
    while (1) {
        console.clear();
        console.log("\n------------- MENU -------------");
        console.log("1.Nhập số phần tử cần nhập và giá trị các phần tử");
        console.log("2.In ra giá trị các phần tử đang quản lý");
        console.log("3.In ra giá trị các phần tử chẵn và tính tổng");
        console.log("4.In ra giá trị lớn nhất và nhỏ nhất trong mảng");
        console.log("5.In ra các phần tử là số nguyên tố trong mảng và tính tổng");
        console.log("6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
        console.log("7.Thêm một phần từ vào vị trí chỉ định");
        console.log("8.Thoat");

        let menu = await input("Enter your choice:");

        switch (menu) {
            case "1":
                console.clear();
                n = await input("Enter your number element");
                await arrInput(n, arr);

                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "2":
                console.clear();

                if (arr.length > 0) {

                    console.log(arr.join(" "));

                }else {
                    console.log("Don't have element!!!");
                }


                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "3":
                console.clear();
                if (arr.length > 0) {

                   await evenNumber(n, arr, subArr);

                }else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "4":
                console.clear();
                if (arr.length > 0) {

                    await valueMaxMin(n, arr);

                }else {
                    console.log("Don't have element!!!");
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "5":
                console.clear();
                if (arr.length > 0) {
                  await  numberPrime(n, arr, subArr);


                }else {
                    console.log("Don't have element!!!");
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "6":
                console.clear();
                if (arr.length > 0) {
                    await checkNumberRepeat(n, arr);


                }else {
                    console.log("Don't have element!!!");
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "7":
                console.clear();
                if (arr.length > 0) {

                    await addElement(n , arr);

                }else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }

                break;
            case "8":
                console.clear();
                if (!(await showContinueMenu())) {
                    return;
                }
                console.log("Exited");
                return;
        }
    }
}

main();
