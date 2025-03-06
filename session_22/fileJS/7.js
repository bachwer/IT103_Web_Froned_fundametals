let num = prompt("Nhập vào mảng");
let arr = num.split("");
let check = true;


for(let i = 0; i < num.length; i++){
    if(isNaN(arr[i])){
        check = false;
    }
}

if(check === true){
    
    // for(let i = 0; i < num.length - 1; i++){
    //     let min = i;
    //         for(let j = i + 1; j < num.length; j++){
    //             if(arr[j] < arr[min]){
    //                 min = j;
    //             }
    //         }
    //         let temp = arr[i];
    //         arr[i] = arr[min];
    //         arr[min] =temp;
    //  }

    arr.sort((a,b) => a -b );
     
    alert(arr.join(""))
}else{
    alert("invalid")
}
