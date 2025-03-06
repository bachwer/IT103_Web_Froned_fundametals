let arr = [];
let num = +prompt("Nhap so lan nhap vao mang");
for(let i = 0; i < num; i++) {
    arr[i] = prompt("lan" + (i + 1));
}

for(let value of arr){
    alert(value);
}
