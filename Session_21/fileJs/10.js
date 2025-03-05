function submit(){
    let number = parseInt(document.getElementById("number").value);

    let count = 0
    let index = 2;

    let arr=[];


    while (count < number) {
        let check = true;
        for (let i = 2; i <= Math.sqrt(index); i++) {
            if (index % i === 0) {
                check = false;
            }
        }
        if (check === true) {
            arr[count] = index;
            count++;
        }
        index++;
    }

    if(!isNaN(number) && number > 0){
        document.getElementById("text").innerText = arr.join(",");
    }else{
        document.getElementById("text").innerText = "invalid";
    }
}