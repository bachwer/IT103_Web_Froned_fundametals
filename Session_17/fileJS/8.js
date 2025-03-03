function change() {
    let month = parseInt(document.getElementById("number").value);

    if(month < 4 && month > 0){
        document.getElementById("text").innerText = "Mùa xuân";
    }else if (month < 7 && month > 0){
        document.getElementById("text").innerText = "Mùa hạ";
    }else if(month < 10&& month > 0) {
        document.getElementById("text").innerText = "Mùa Thu";
    }else  if(month < 13 && month > 0){
        document.getElementById("text").innerText = "Mùa đông";
    }else{
        document.getElementById("text").innerText = "Invalid";
    }



}