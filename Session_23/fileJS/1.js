function submit(){
    let number = document.getElementById("number").value;
    let num = number.split(",");
    let arr=[];
    let index = 0;
    let check  = false;
    for(let i = 0; i < num.length; i++){
        if(num[i] > 10){
            arr[index++] = num[i];
            check = true;
        }
    }


    if(check === true){
        document.getElementById("text").innerHTML = arr.join(" ");

    }else{
        document.getElementById("text").innerHTML = "khong co so lon hon 10";

    }

}