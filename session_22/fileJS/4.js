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
    for(let i = 0; i < num.length; i++){
       if(temp < arr[i]){
            temp = arr[i]
       }
    }

alert(temp +" : la so lon nhat")
}else{
    alert("invalid")
}
