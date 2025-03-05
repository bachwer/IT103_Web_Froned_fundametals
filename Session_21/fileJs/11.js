function submit(){
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);

    let cung = "";

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        cung = "Bảo Bình";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        cung = "Song Ngư";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        cung = "Bạch Dương";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        cung = "Kim Ngưu";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        cung = "Song Tử";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        cung = "Cự Giải";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        cung = "Sư Tử";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        cung = "Xử Nữ";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        cung = "Thiên Bình";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        cung = "Bọ Cạp";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        cung = "Nhân Mã";
    } else if((month === 12 && day >= 22) || (month === 1 && day <= 19)){
        cung = "Ma Kết";
    }else{
        cung = "invalid";
    }
    document.getElementById("text").innerText = cung;
}

