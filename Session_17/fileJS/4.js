function change(){
    let number = parseInt(document.getElementById("check").value);

    if(number % 3 === 0 && number % 5 === 0){
        document.getElementById("text").innerText = "chia hết cho 3 và 5";
    }else if(number % 3 === 0){
        document.getElementById("text").innerText = "chia hết cho 3";
    }else if(number % 5 === 0){
        document.getElementById("text").innerText = "chia hết cho 5";
    }else{
        document.getElementById("text").innerText = "không chia hết cho cả35"
    }
}