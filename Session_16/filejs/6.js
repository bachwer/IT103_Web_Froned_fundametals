function submit() {
    let year = parseInt(document.getElementById("userName").value);

    if(year % 4 === 0 && year % 100 !== 0  || year % 400 === 0) {
        document.getElementById("number1").innerText = "Nam nhuan";
    }else{
        document.getElementById("number1").innerText = "Khong pahi Nam nhuan";

    }

}