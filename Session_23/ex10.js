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
let n;
async function main() {
    let arr = [];
    let arr1=[];

    let menu;
    let index;
    let temp = 0;
    while (1) {
        console.clear();
        console.log("---------------Menu-----------------")
        console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử ");
        console.log("2. In ra giá trị các phần tử đang quản lý ")
        console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần")
        console.log("4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng")
        console.log("5. In ra các số nguyên tố trong mảng và tính tổng")
        console.log("6. Nhập một số và đếm số lần xuất hiện trong mảng")
        console.log("7. Thêm một phần tử vào vị trí chỉ định")
        console.log("8. Xóa một phần tử theo giá trị")
        console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần")
        console.log("0. Thoát")
        menu = await input("Enter your choice");

        switch (menu) {
            case "1":
                console.clear();
                n = await input("Enter your number element");
                for (let i = 0; i < n; i++) {
                    arr[i] = await input("arr[" + (i + 1) + "]");
                }
                if (!(await showContinueMenu())) {
                    return;
                }

                break;

            case "2":
                console.clear();
                if (arr.length > 0) {
                        console.log(arr.join(" "));
                } else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }
                break;

            case "3":
                console.clear();
                index = 0;
                if (arr.length > 0) {
                    for(let i = 0; i < n; i++) {
                        if(arr[i] % 2 === 0){
                            arr1[index] = arr[i]
                            index++;
                        }
                    }
                    console.log(arr1.join(" "));
                    temp = 0;
                    for(let i = 0; i < index; i++) {
                        temp += parseInt(arr1[i]);
                    }
                    console.log("Even sum: " + temp);


                    for(let j = 0; j < index - 1; j++) {
                        for(let k = j + 1; k < index; k++) {
                            if(parseInt(arr1[j]) > parseInt(arr1[k])){
                                temp = parseInt(arr1[j])
                                arr1[j] = parseInt(arr1[k])
                                arr1[k] = temp;
                            }
                        }
                    }
                    console.log(arr1.join(" "));
                } else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "4":
                console.clear();

                if (arr.length > 0) {
                   let max = 0;
                   let min = arr[1];
                   let pos = 0;
                   let posMax = 0;

                    for(let i = 0; i < n; i++) {
                        if(max < parseInt(arr[i])){
                            max = parseInt(arr[i])
                            posMax = i;
                        }
                        if(min > parseInt(arr[i])){
                            min = parseInt(arr[i])
                            pos = i;
                        }
                    }
                    console.log("Max: "+"arr[" + (posMax + 1) + "] = " + max);
                    console.log("Min: "+"arr[" + (pos + 1) + "] = " + min);

                } else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }


                break;
            case "5":

                index = 0;
                if (arr.length > 0) {
                    for(let i = 0; i < n; i++) {
                        let check = true;
                        if(parseInt(arr[i]) === 1){
                            check = false;
                        }
                        for(let j = 2; j < arr[i]; j++) {
                            if(parseInt(arr[i]) % j === 0){
                                check = false;
                            }
                        }
                        if(check === true){
                            arr1[index] = arr[i]
                            index++;
                        }
                    }
                    temp = 0;
                    for (let j = 0; j < index; j++) {
                        temp += parseInt(arr1[j]);
                    }


                    console.log(arr1.join(" "));
                    console.log("total: " +temp );
                } else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }

                console.clear();

                break;
            case "6":
                console.clear();
                if (arr.length > 0) {

                    temp = await input("Enter your number");
                    index = 0;
                    for (let i = 0; i < n; i++) {
                        if(parseInt(temp) === parseInt(arr[i])){
                            index++;
                        }
                    }

                    if(index > 0){
                        console.log("Element appears: " + index);
                    }

                } else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "7":
                console.clear();
                if (arr.length > 0) {
                    index = +await input("Enter your position");
                    temp = +await input("Enter value");
                    index--;
                    arr.splice(index, 0, temp);
                    console.log(arr.join(" "));
                } else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "8":
                console.clear();
                if (arr.length > 0) {
                    index = +await input("Enter your position to delete");
                    index--;
                    arr.splice(index, 1);
                    console.log(arr.join(" "));
                } else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "9":
                console.clear();

                if (arr.length > 0) {

                    console.log("1.Up")
                    console.log("2.Down");
                    index = +await input("Enter your choice :");

                    if(index === 1){

                        for(let j = 0; j < n - 1; j++) {
                            for(let k = j + 1; k < n; k++) {
                                if(parseInt(arr[j]) > parseInt(arr[k])){
                                    temp = parseInt(arr[j])
                                    arr[j] = parseInt(arr[k])
                                    arr[k] = temp;
                                }
                            }
                        }
                        console.log(arr.join(" "));
                    }else if(index === 2){

                        for(let j = 0; j < n - 1; j++) {
                            for(let k = j + 1; k < n; k++) {
                                if(parseInt(arr[j]) < parseInt(arr[k])){
                                    temp = parseInt(arr[j])
                                    arr[j] = parseInt(arr[k])
                                    arr[k] = temp;
                                }
                            }
                        }
                        console.log(arr.join(" "));
                    }else{
                        console.log("Try again");
                    }
                } else {
                    console.log("Don't have element!!!");
                }

                if (!(await showContinueMenu())) {
                    return;
                }
                break;
            case "0":
                console.clear();
                console.log("Exited");
                return;
        }
    }
}

main()