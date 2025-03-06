let arr=[2,4,3,1,4,2,5,6,7,9,7,5,7]

let num = +prompt("Nhập vào số bất kì")
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(num === arr[i]){
        count++;
    }
}
alert("Số lần xuất hiện của " + num +" = " + count)