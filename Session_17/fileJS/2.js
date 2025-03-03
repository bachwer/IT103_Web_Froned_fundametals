function change(){
    let text = document.getElementById("check").value;
    if(/^\d+$/.test(text) === true){
        document.getElementById("text").innerText="là chữ số";
    }else if(text.length === 1){
        document.getElementById("text").innerText="là chữ cái";
    }else{
        document.getElementById("text").innerText="Không phải chữ cái";
    }
}