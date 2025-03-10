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

//function input arr;
async function inputArr(n, arr){
    for (let i = 0; i < n; i++) {
        arr[i] = await input("arr[" + (i + 1) + "] = ")
    }
}

//find max, min in arr
function MaxMinArr(n , arr){
    let min = arr[0];
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > min) {
            max = arr[i];
        }
        if(arr[i] < max) {
            min = arr[i];
        }
    }
    console.log("Max: "+max);
    console.log("Min: "+min);
}
//total element in arr
function sumArr(n, arr){
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += parseInt(arr[i]);
    }

    console.log("Sum: "+sum);
}
//number of appearances in arr
async function appearanceArr(n, arr){
    let check = +await input("Enter your Element value to find");
    let index = 0 ;
    for(let i = 0; i < n; i++){
        if(check === parseInt(arr[i])){
            index++;
        }
    }

    console.log("number of appearances: "+index);
}
//function arrange dow to up;

function arrangeArr(n, arr){
    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j < n ; j++){
            if(parseInt(arr[i]) > parseInt(arr[j])){
                let temp = parseInt(arr[i]);
                arr[i] = parseInt(arr[j])
                arr[j] = temp;
            }
        }
    }
    console.log(arr.join(" "));
}



    let n;
async function main() {
    let menu;
    let arr = [];
    while (1) {
        console.clear();
        console.log("1. Input Array");
        console.log("2. Show all Array");
        console.log("3. Find element Max and Min in Array");
        console.log("4. Sum of element");
        console.log("5. Number of occurrences of the element ");
        console.log("6. Arrange the alter");
        console.log("7. Exit !");

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
                    MaxMinArr(n, arr);
                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "4":
                if(arr.length > 0){
                    sumArr(n,arr);



                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "5":
                if(arr.length > 0){

                  await appearanceArr(n, arr);


                }else{
                    console.log("Don't have any Element !!")
                }
                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "6":
                if(arr.length > 0){

                    arrangeArr(n, arr);


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

