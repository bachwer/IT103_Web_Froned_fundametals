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
//function show odd number and even;

function OddEvenArr(n, arr){
    let odd =[];
    let even = [];
    let index = 0;
    let index1 = 0;
    for(let i = 0; i < n; i++){
        if(parseInt(arr[i]) % 2 === 0){
            even[index] = parseInt(arr[i]);
            index++;
        }else{
            odd[index1] = parseInt(arr[i]);
            index1++;
        }
    }
    console.log("odd: " + odd.join(" "));
    console.log("even: " + even.join(" "));
}
// average element in arr
function averageArr(n , arr){
    let temp = 0 ;
    for(let i = 0; i < n; i++){
        temp += parseInt(arr[i]);
    }
    let aver = arr.length;
    console.log("temp: " + (aver.toFixed(2)));
}
// function max second
function MaxSecond(n ,arr){
    let temp = [0];
    temp[0] = 0;
    temp[1] = 0;

    for(let i = 0; i < n; i++){

        if(temp[0] < parseInt(arr[i]) ){
            temp[1] = temp[0]
            temp[0] = parseInt(arr[i]);
        }else if(temp[1] < parseInt(arr[i])){
            temp[1] = parseInt(arr[i]);
        }
    }
    console.log("second largest element:" + temp[1]);
}



let n;
async function main() {
    let menu;
    let arr = [];
    let pos;
    while (1) {
        console.clear();
        console.log("1.Nhập mảng số nguyên");
        console.log("2.Hiển thị mảng");
        console.log("3.Tìm các phần tử chẵn và lẻ");
        console.log("4. Tính trung bình cộng của mảng");
        console.log("5.Xóa phần tử tại vị trí chỉ định");
        console.log("6.Tìm phần tử lớn thứ hai trong mảng");
        console.log("7.Thoat");

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
                    OddEvenArr(n ,arr);

                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "4":
                if(arr.length > 0){

                    averageArr(n , arr);


                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "5":
                if(arr.length > 0){
                    pos = +await input("Enter position to delete")
                    pos--;
                    arr.splice(pos, 1);
                    console.log(arr.join(" "));
                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "6":
                if(arr.length > 0){

                    MaxSecond(n, arr);


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

