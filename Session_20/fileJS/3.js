function submit(){
    let number = document.getElementById("check").value;

let num = "";
    if(!isNaN(number)){

    for(let i = number.length - 1; i >= 0; i--){
        num += number[i]

    }
    if(num === number){
        document.getElementById("text").innerText = "là số đối xứng";
    }else{
        document.getElementById("text").innerText = "không là số đối xứng";
        }
    }else{
        document.getElementById("text").innerText = "invalid";
    }

}