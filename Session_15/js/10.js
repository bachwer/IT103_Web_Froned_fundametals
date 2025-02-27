function submit(){
    let num = parseInt(document.getElementById("number").value);
    let check;
    if(num == Math.sqrt(num) * Math.sqrt(num)){
        let check = true;
        document.getElementById("number1").innerText = check;
    }else{
        let check = false;
        document.getElementById("number1").innerText = check;
    }
}   