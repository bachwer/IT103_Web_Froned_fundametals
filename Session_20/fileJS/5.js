function submit(){
    let numberA = parseInt(document.getElementById("a").value);
    let numberB = parseInt(document.getElementById("b").value);
    let number = numberA;

       if(!isNaN(numberB) && !isNaN(numberB) && numberA > 0){

           for(let i = 0; i < numberB - 1; i++){
               numberA *= number;
           }
           if(numberB < 0){
               numberA = 1 / numberA;
           }
           document.getElementById("text").innerText = numberA;
       }else{
           document.getElementById("text").innerText = "invalid";
       }


}