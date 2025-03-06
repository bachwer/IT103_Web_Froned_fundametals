let arr = [1,5,3,7,2]
let check = false;
let variable = +prompt("nhap so bat ki")
for(let i = 0; i<arr.length; i++){
    if(variable === arr[i]){
        check = true;
        break;
    }
}
if(check){
    alert("Bingo")
}else{
    alert("Chúc bạn MMLS")
}