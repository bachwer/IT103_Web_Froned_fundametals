let number = prompt("Enter a number");
let part = number.split("")
let arrNumber = ["", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"];

if(part.length === 3){
    if(part[1] > 1){
        alert(arrNumber[part[0]] + " trăm " + arrNumber[part[1]] +" mươi " +arrNumber[part[2]] );
    }else{
        alert(arrNumber[part[0]] + " trăm "  +"mười "+ arrNumber[part[2]] );
    }
}else if(part.length === 2){
    if(part[0] > 1){
        alert(arrNumber[part[0]] +" mươi "+ arrNumber[part[1]] );
    }else{
        alert(" mười "+ arrNumber[part[1]] );
    }
}else{
    if(part[0] < 10){
        alert(arrNumber[part[0]]);
    }else{
        alert("Mười");
    }
}