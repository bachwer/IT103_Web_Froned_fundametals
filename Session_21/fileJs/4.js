

function Submit(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);
    let x1;
    let x2;

    if( a === 0){
        x1 = -c / b;
        document.getElementById("x1").innerText ="x1 = "+x1.toFixed(2);

    }else{
        let delta = b * b - 4 * a * c;

        if(delta > 0){
            x1 = (-b + Math.sqrt(delta)) / ( 2 *a );
            x2 = (-b - Math.sqrt(delta)) / (2 *a ) ;
            document.getElementById("x1").innerText ="x1 = " + x1.toFixed(2);
            document.getElementById("x2").innerText ="x2 = " + x2.toFixed(2);

            return;
        }else if(delta === 0){
            x1 = -b / (2*a);
            document.getElementById("x1").innerText ="x1 = x2 = "+ x1.toFixed(2);
            document.getElementById("x2").innerText ="";

            return;
        }else{
            document.getElementById("x1").innerText ="VO NGHIEM";

            document.getElementById("x2").innerText ="";
            return;
        }
    }
}

