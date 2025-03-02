function average(){
    let math = parseFloat(document.getElementById("math").value);
    let physics = parseFloat (document.getElementById("physics").value)
    let chemistry = parseFloat(document.getElementById("chemistry").value);


    if(math < 0 || physics < 0 || chemistry < 0){
        document.getElementById("result") = "Error";
        return;
    }
    if (isNaN(math) || isNaN(physics) || isNaN(chemistry)) {
        document.getElementById("result").innerText = "Invalid";
        return;
    }


    let resultAverage = (math + physics + chemistry) / 3;

    if(resultAverage >= 8){
        document.getElementById("result").innerText = resultAverage.toFixed(2) + " : gioi";
    }else if(resultAverage > 6.5){
        document.getElementById("result").innerText = resultAverage.toFixed(2) + " : Kha";
    }else if((resultAverage > 5)){
        document.getElementById("result").innerText = resultAverage.toFixed(2) + " : TB";
    }else{
        document.getElementById("result").innerText = resultAverage.toFixed(2) + " : Yeu";
    }

}