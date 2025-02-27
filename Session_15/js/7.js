function submit(){
  

    let number = parseInt(document.getElementById("number").value);

    result = number.toLocaleString('vi-VN');
    document.getElementById("number1").innerText = result;


   

}