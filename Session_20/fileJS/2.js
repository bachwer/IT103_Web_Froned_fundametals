function submit(){
    let number = document.getElementById("check").value;
    let arr = [];
    let j = 0;
    if(!isNaN(number) && number > 4){
        for(let i = 1 ; i <= number ; i++){
           if(i % 5 === 0){
                arr[j] = i;
                j++;
           }
        }
        document.getElementById("text").innerText = arr.join(" ");
    }else{
        document.getElementById("text").innerText = "invalid";
    }

}