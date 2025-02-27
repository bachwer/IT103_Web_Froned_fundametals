
const pi = 3.14;
let r = prompt("Nhap Ban Kinh day");
let h = prompt("Chieu cao");



//chu vi
console.log("1. Chu vi đáy hình trụ = " + (2 * pi * r))
alert("1. Chu vi đáy hình trụ = " + (2 * pi * r))
//dien tich xung quanh
console.log("2. Diện tích xung quanh hình trụ = " + (2*pi*r*h))
alert("2. Diện tích xung quanh hình trụ = " + (2*pi*r*h))
//dien tich toan phan
console.log("3. Diện tích toàn phần hình trụ = " + ((2*pi*r*h) + (2*pi*(r*r))))
alert("3. Diện tích toàn phần hình trụ = " + ((2*pi*r*h) + (2*pi*(r*r))))
// the tich
console.log("4. Thể tích hình trụ = " + (pi*h*(r*r)));
alert("4. Thể tích hình trụ = " + (pi*h*(r*r)));

