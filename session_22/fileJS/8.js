let num = prompt("Nhập vào mảng");
let arr = num.split("");
let check = true;



for(let i = 0; i < num.length; i++){
    if(isNaN(arr[i])){
        check = false;
    }
}

let index = 0;
let a = 0;
if(check === true){
    let temp = 0;
    for(let i = 0; i < num.length; i++){

        for(let j = 0; j < num.length; j++){
           if(i === j){
               continue;
           }else{
               if(arr[i] === arr[j]){
                   temp++;
               }
           }
        }
        
        if(index < temp){
            index = temp;
            a = i
        }else if( index === temp){
            if(arr[a] > arr[i]){
                a = i;
            }
        }  
    }

    alert(arr[a])

}else{
    alert("invalid")
}
