function submit(){


    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);

    if(!name || !age && age > 0){
        document.getElementById("result1").innerText = "no data & error";
        return
    }
    console.log(name);
    console.log(age);
    document.getElementById("result").innerText = "done";
}