function submit(){
    let money = parseInt(document.getElementById("money").value);
    let rate = parseInt(document.getElementById("rate").value);
    let month = parseInt(document.getElementById("month").value);

    rate /= 100;
    let tien = money;
    let tien1 = tien;
    for(let i= 0; i < month; i++){
      tien *= rate;
      money += tien
      tien = money
    }
    let n = money - tien1;


    document.getElementById("text").innerHTML = "Tiền lãi: " +n.toFixed(2)+"<br>Tiền lãi nhận đc" + money;



}