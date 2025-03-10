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
async function inputArr(n, arr){
    for (let i = 0; i < n; i++) {
        arr[i] = await input("arr[" + (i + 1) + "] = ")
    }
}
//function find largest element in arr
function largestElement(arr){
    let max = 0;
    let index;
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
            index = i;
        }
    }
    console.log("Max: "+max  + ", Index: "+ (index + 1));
}

//sum of element and average

function sumAndAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }

    let aver = sum / arr.length;

    console.log("Average: "+aver.toFixed(2));
    console.log("Sum: " + sum);
}

 function reverse(arr){
    for(let i = 0; i < arr.length / 2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
 }

 function checkMirror(arr){
    let checkArr = [...arr]

    reverse(checkArr);

     console.log(arr.join(" "));

    if(arr.toString() === checkArr.toString()){
        console.log("true");
    }else{
       console.log("false");
    }
 }



let n;
async function main() {
    let menu;
    let arr = [];
    while (1) {
        console.clear();
        console.log("1.Nhập mảng số nguyên");
        console.log("2.Hiển thị mảng");
        console.log("3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
        console.log("4.Tính tổng và trung bình cộng của các số dương trong mảng");
        console.log("5. Đảo ngược mảng");
        console.log("6.Kiểm tra mảng có đối xứng không");
        console.log("7.Thoát chương trình");

        menu = await input("Enter your choice:");

        switch (menu) {
            case "1":
                n = await input("Enter your number element: ");
                await inputArr(n, arr);
                break;
            case "2":

                if(arr.length > 0){
                    console.log(arr.join(" "));
                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "3":
                if(arr.length > 0){
                    largestElement(arr);
                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "4":
                if(arr.length > 0){

                    sumAndAverage(arr);


                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "5":
                if(arr.length > 0){

                    reverse(arr);
                    console.log("reverse: " + arr.join(" "));
                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "6":
                if(arr.length > 0){


                    checkMirror(arr);

                }else{
                    console.log("Don't have any Element !!")
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

