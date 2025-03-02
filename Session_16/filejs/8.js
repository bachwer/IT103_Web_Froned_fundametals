let a = +prompt("Enter a number");
let b = +prompt("Enter b number");
let c = +prompt("Enter c number");

if(a + b > c && c + a > b && b + c > a) {
    if(a === b && c === a) {
        alert("tam giac deu")
    }else if( (a * a) ===(b*b)+(c*c) || (b*b) === (a*a) +(c*c) || (c*c)=== (a*a)+(b*b) ) {
        alert("tam giac Vuong")
    }else if(a===b || a===c || b===c){
        alert("tam giac Can")
    }else{
        alert("giam giac thuong")
    }
}
