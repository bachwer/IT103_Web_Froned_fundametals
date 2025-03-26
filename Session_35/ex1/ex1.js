function add(){
    let text = document.getElementById("box-message").value;
    let box = document.getElementById("box-content");

    if (!text.trim()) return;

    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let divIn1 = document.createElement("div");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let btnDel = document.createElement("button");
    let btnDet = document.createElement("button");




    span.innerText = text;
    btnDel.innerText = "Delete";
    btnDet.innerText = "Edit"
    input.type = "radio";
    input.name = text;

    div1.classList.add("div1");

    div.appendChild(input);
    div.appendChild(span);



    div1.appendChild(div);
    divIn1.appendChild(btnDet);
    divIn1.appendChild(btnDel);
    div1.appendChild(divIn1);

    box.appendChild(div1);


    btnDel.addEventListener("click", function() {
        if (div.parentNode) {
            box.removeChild(div1);
        }
    });

    input.addEventListener("change", function() {
        span.style.textDecoration = input.checked ? "line-through" : "none";
    });
    document.getElementById("box-message").value = "";

    btnDet.addEventListener("click", function() {
        span.innerText = prompt("Enter your name");
    });


}