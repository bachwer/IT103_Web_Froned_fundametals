function change(){
    let number = document.getElementById("check").value;
    let part = number.split(" ") ;

    let a = 0;
    for( let i = 0; i < part.length; i++ ){
        if(a < parseInt(part[i])) {
            a = parseInt(part[i]);
        }
    }
    document.getElementById("text").innerText = a + "la số lớn nhát !";

}