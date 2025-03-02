let a = +prompt("Enter a ");
let b = +prompt("Enter b ");
let operator = prompt("Enter operator(+; -; *; /)");


switch (operator) {
    case "+":
        alert("a + b = " + (a + b));
        break;
    case "-":
        alert('a - b = ' + (a - b));
        break
    case "*":
        alert('a * b = ' + (a * b));
        break;
    case "/":
        alert('a / b = ' + (a / b));
        break;
}