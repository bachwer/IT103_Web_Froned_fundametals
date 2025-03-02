function submit(){
    let arrNumber = ["Không", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"];

    let number = parseInt(document.getElementById("userName").value);

    document.getElementById("number1").innerText = arrNumber[number];

}