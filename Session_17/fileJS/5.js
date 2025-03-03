function change() {
    let number = document.getElementById("check").value;
    let check = false;
    for(let i = 0; i < number.length; i++) {
        if(number[i] === " "){
            check = true;
            break;
        }
    }


    if(!check){
        document.getElementById("text").innerText = "không Có dấu 'cách'";
    }else{
        document.getElementById("text").innerText = "Có dấu 'cách'";
    }

}