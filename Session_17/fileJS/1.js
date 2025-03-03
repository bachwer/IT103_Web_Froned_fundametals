function change() {
    let month = parseInt(document.getElementById("number").value);

    if(month === 1||month === 3||month === 5||month === 7||month === 8||month === 10||month === 12){
        document.getElementById("text").innerText = "Tháng có 31 ngày";
    }else if (month === 2){
        document.getElementById("text").innerText = "tháng 2 có 28 hoặc 29 ngày năm nhuận";
    }else if(month === 4||month === 6||month === 9||month === 11) {
        document.getElementById("text").innerText = "Tháng có 30 ngày";
    }else{
        document.getElementById("text").innerText = "Invalid";
    }



}