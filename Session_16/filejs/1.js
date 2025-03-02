function submit(){
    let number = parseInt(document.getElementById("number").value)

    if(number % 2 === 0){
        document.getElementById("number1").innerText = "Chan"
    }else{
          document.getElementById("number1").innerText = "Le"
    }
}