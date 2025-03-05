function submit(){
    let number = parseInt(document.getElementById("number").value);
    let check = true;
    if(number < 2){
        check = false;
    }
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            check = false;
        }
    }
    if(check === true){
        document.getElementById("text").innerText = "là số nguyên tố";
    }else{
        document.getElementById("text").innerText = "không là số nguyên tố";
    }
}