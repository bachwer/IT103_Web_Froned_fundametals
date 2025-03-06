let num = prompt("Nhập vào mảng");
let arr = num.split("");
let check = true;


for(let i = 0; i < num.length; i++){
    if(isNaN(arr[i])){
        check = false;
    }
}

if(check === true){
    arr.reverse();
    alert(arr.join(''))
}else{
    alert("invalid")
}
