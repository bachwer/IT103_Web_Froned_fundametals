function submit(){
    let num = (document.getElementById("number").value);
    let number = num.split(",");

    let temp = 0;
    let check = false;
    for(let i = 0; i < number.length; i++){
        if(temp < parseInt(number[i])){
            temp = parseInt(number[i]);
            check = true;
        }
    }

    if (check === true){
        document.getElementById("text").innerHTML = temp;
    }else {
        document.getElementById("text").innerText = "không có số lơn nhất";

    }

}