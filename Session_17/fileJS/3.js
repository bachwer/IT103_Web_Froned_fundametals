let check = 0;
    (async function () {
        await apivalue();
    })();


    async function apivalue() {

        try {
            let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            /*
                        "base": "USD",
                        "rates": {
                            "VND": 24000.5,
                            "EUR": 0.92,
                            "JPY": 150.3
                        }
            */
            let datavnd = await response.json();
            let vnds = datavnd.rates.VND;
            document.getElementById("vndApi").innerText = vnds.toLocaleString("vi-VN");
            document.getElementById("warning2").innerText = "Get API successs!!";

            return vnds;
        } catch (error) {
            let vnds = 25.0000;
            document.getElementById("vndApi").innerText = vnds.toLocaleString("vi-VN");
            document.getElementById("warning1").innerText = "Error get Api";

            return 25000;
        }
    }

    async function change() {
        let usd = document.getElementById("usd").value;

        if (usd <= 0) {
            document.getElementById("result").innerText = "Invalid";
            return;
        }
        let vnd = await apivalue();
        

        if(check % 2 == 0){
            let changed = usd * vnd;
            document.getElementById("result").innerText = changed.toLocaleString("vi-VN") + " VND";
        }else{
            let changed =  usd / vnd;
            document.getElementById("result").innerText = changed.toLocaleString("vi-VN") + " USD";
        }




       
    }

    function vnd(){
        check++;
        if(check % 2 == 0){
            document.getElementById("h1").innerText = "USD to VND";
        }else{
            document.getElementById("h1").innerText = "VND to USD";
        }
        return check;
    }