function submit(){
    let money = parseInt(document.getElementById("number").value)
    let month = parseInt(document.getElementById("month").value)
    let rateOfMonth = 0.043/12;


    if (isNaN(money) || isNaN(month) || money <= 0 || month < 0) {
        document.getElementById("number1").innerText = "Vui lòng nhập số hợp lệ!";
        return;
    }

    let rateOfMoney = money * Math.pow(1 + rateOfMonth, month);
    document.getElementById("number1").innerText = rateOfMoney.toFixed(2);


}