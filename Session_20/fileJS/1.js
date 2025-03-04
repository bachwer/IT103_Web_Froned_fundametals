function submit(){
    let number = parseInt(document.getElementById("check").value);
    let a = 0;

    if(!isNaN(number) && number > 0){
        for(let i = 0 ; i <= number ; i++){
            a += i;
        }
        document.getElementById("text").innerText = a;
    }else{
        document.getElementById("text").innerText = "invalid";
    }





}