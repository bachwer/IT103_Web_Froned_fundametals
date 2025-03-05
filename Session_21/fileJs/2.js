function submit() {
    let number = document.getElementById('number').value;
    let even = 0;
    let odd = 0;
    for(let i = 0; i < number.length; i++) {
        if(parseInt(number[i]) % 2 === 0){
            even++;
        }else{
            odd++;
        }
    }
    document.getElementById("text").innerText ="Tong so chan: "+ even + " - Tong so le: " + odd ;

}