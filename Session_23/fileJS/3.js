let arr = [];
let n = +prompt("Enter your number element in arr");
let check = true
for (let i = 0; i < n; i++) {
    arr[i] = +prompt("arr[" + (i + 1) + "]");
    if(isNaN(arr[i]) || arr[i] === undefined || arr[i] === "") {
        check = false;
    }
}
let count = 0;


if(check === true && arr.length > 0){
    for (let i = 0; i < n; i++) {
        if(arr[i] < 0) {
            count++;
        }
    }

    alert(count)


}else{
    alert("Invalid number");
}
