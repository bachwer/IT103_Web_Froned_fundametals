function submit(){
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password"). value


    if(username === "ADMIN"){
        if(password === "TheMaster"){
            alert("Welcome")
         }else if(password === ""){
            alert("Cancelled")
         }else{
             alert("Wrong password")
        }
    
    }else if(password === ""){
        alert("Cancelled")
    }else{
        alert("I Don’t know you")
    }
}