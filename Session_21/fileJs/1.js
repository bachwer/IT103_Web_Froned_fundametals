function submit(){
    let number = document.getElementById('number').value;
    let total = 0;
    for(let i = 0; i < number.length; i++){
        if(parseInt(number[i]) % 2 !== 0){
            total += parseInt(number[i])
        }
    }
    document.getElementById("text").innerText = total;
}