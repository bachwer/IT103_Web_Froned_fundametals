function submit() {
    let password = document.getElementById("password").value;
    let pas = "admin123"

    if(password === pas) {
        document.getElementById("text").innerText = "Da dung"
    }else{
        document.getElementById("text").innerText = "sai mat khau";
    }


}