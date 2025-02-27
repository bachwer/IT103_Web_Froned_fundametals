function submit(){
  

    let number = parseInt(document.getElementById("number").value);

    let result = Math.sqrt(Number(number))
    document.getElementById("number1").innerText = result.toFixed(2);


   

}