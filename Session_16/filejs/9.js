let time = prompt("nhao dúng VD: 12:21:34");
let part = time.split(":");

if(parseInt(part[0]) - 12 >= 0){
    alert(parseInt(part[0]) - 12 +" : " +part[1] +" : " + part[2] + " PM")
}else if(parseInt(part[0]) === 0){
    alert("12" +" : " + part[1] +" : " + part[2] + " AM")
}else if (parseInt(part[0]) < 12){
    alert(parseInt(part[0]) +" : " + part[1] +" : " + part[2] + " AM")
}