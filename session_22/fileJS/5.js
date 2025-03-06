let num = prompt("Nhập vào mảng");
let arr = num.split("");
let check = true;


for(let i = 0; i < num.length; i++){
    if(isNaN(arr[i])){
        check = false;
    }
}

if(check === true){
    let temp = 0;
    let temp1 = 0;
    for(let i = 0; i < num.length; i++){
       if(arr[i] % 2 === 0){
           temp += parseInt(arr[i]);
       }else{
           temp1 += parseInt(arr[i]);
       }
    }

    alert("tong so le: " + temp1 + " || " + "tong so chan: " + temp)
}else{
    alert("invalid")
}
