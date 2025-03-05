function submit(){
    let mon = parseInt(document.getElementById("money").value);

    let money500 = 0;
    let money200 = 0;
    let money100 = 0;
    let money50 = 0;
    let money20 = 0;
    let money10 = 0;
    let money5= 0;
    let money2= 0;
    let money1= 0;

    document.getElementById("text").innerHTML = "";



        if(mon / 500 > 0 ){
            money500 = Math.floor(mon / 500);
            mon -=  (money500 * 500);
        }
        if(mon / 200 > 0){
            money200 = Math.floor(mon / 200);
            mon = mon - (money200 * 200);
        }
        if(mon / 100 > 0){
            money100 = Math.floor(mon / 100);
            mon = mon - (money100 * 100);
        }
        if(mon / 50 > 0){
            money50 = Math.floor(mon / 50);
            mon = mon - (money50* 50);
        }
        if(mon / 20 > 0){
            money20 = Math.floor(mon / 20);
            mon = mon - (money20* 20);
        }
        if(mon / 10 > 0){
            money10 = Math.floor(mon / 10);
            mon = mon - (money10* 10);
        }
        if(mon / 5 > 0){
            money5 = Math.floor(mon / 5);
            mon = mon - (money5* 5);
        }
        if(mon / 2 > 0){
            money2 = Math.floor(mon / 2);
            mon = mon - (money2* 2);
        }
        if(mon > 0){
            money1 = Math.floor(mon);
            mon = mon - (money1);
        }

    let output = ""
    if (money500 > 0) output += `500: ${money500}<br>`;
    if (money200 > 0) output += `200: ${money200}<br>`;
    if (money100 > 0) output += `100: ${money100}<br>`;
    if (money50 > 0) output += `50: ${money50}<br>`;
    if (money20 > 0) output += `20: ${money20}<br>`;
    if (money10 > 0) output += `10: ${money10}<br>`;
    if (money5 > 0) output += `5: ${money5}<br>`;
    if (money2 > 0) output += `2: ${money2}<br>`;
    if (money1 > 0) output += `1: ${money1}<br>`;

    document.getElementById("text").innerHTML = output;




    console.log("hi");



}