function submit(){
    let num = parseInt(document.getElementById("number").value)



    let i = 0;
    let arr =[];
    while( num > 0){
        arr[i] = num % 2;
        num = Math.floor(num / 2);
        i++;
    }






    document.getElementById("number1").innerText = arr.reverse().join("");
}