

function submit() {
    let user = (document.getElementById("number").value);
    let arr = user.split(",");

    let count = 0;
    let arrNum = [];
    let check = false;

    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])){
            arrNum[count] = arr[i];
            count++;
            check = true;
        }
    }

    if(check === true){
        document.getElementById("text").innerText =arrNum.join(" ");
    }else{
        document.getElementById("text").innerText = "khong co ki tu so";

    }


}