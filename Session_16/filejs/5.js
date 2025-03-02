function submit(){
    let yearOfExperience = parseInt(document.getElementById("userName").value);


    if( yearOfExperience <= 1){
        document.getElementById("number1").innerText ="Mới vào nghề" ;
    }else if(yearOfExperience <= 3 ){
        document.getElementById("number1").innerText ="Nhân viên có kinh nghiệm" ;
    }else if(yearOfExperience <= 6 ){
        document.getElementById("number1").innerText ="Chuyên viên" ;
    }else{
        document.getElementById("number1").innerText =" Quản lý" ;
    }

}