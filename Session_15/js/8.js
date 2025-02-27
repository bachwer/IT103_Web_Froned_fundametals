function submit() {
    let inputDate1 = document.getElementById("date1").value; 
    let inputDate2 = document.getElementById("date2").value;

    
    if (inputDate1 || inputDate2) {
        let date2 = new Date(inputDate1); 
        let date3 = new Date(inputDate2); 
        let result = date3 - date2; 
        let day = result / (1000 * 60 * 60 *24) 
        document.getElementById("number1").innerText = Math.abs(day) + " day";

    } else {
        alert("Vui lòng nhập ngày!");
    }
}