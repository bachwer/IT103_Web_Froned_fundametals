function submit() {
    let number = parseInt(document.getElementById("number").value);
    let num=[];
    let count = 0;
    for(let i = 0; i <= number; i++) {
        if(number % i === 0){
            num[count] = i;
            count++;
        }
    }
    document.getElementById("text").innerText = "ước của 10: " + num.join(",");
}