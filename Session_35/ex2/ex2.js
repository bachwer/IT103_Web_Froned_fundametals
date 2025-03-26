
let add = document.getElementById("ctn");
    add.addEventListener("click", function() {
        document.getElementById("box-message").style.display = "flex";
        document.getElementById("box-content").style.display = "n   one";

    });
let save = document.getElementById("save");
save.addEventListener("click", function() {
    let name=document.getElementById("bookName").value;
    let url=document.getElementById("bookUrl").value;
    ham(name, url)
    document.getElementById("box-message").style.display = "none";
    document.getElementById("box-content").style.display = "flex";


});

function ham(name, url){
    let boxFull = document.getElementById("box-content");

    let box = document.createElement("div");
    box.innerHTML = `<img src="https://i.pinimg.com/736x/84/fb/ca/84fbca218b05152b9cf71707bd5eda6a.jpg" alt="incon">
    <i class="fa-solid fa-xmark icon"></i>
    <a href="${url}">   <p>${name}</p></a>`;
    box.classList.add("divA");
    boxFull.appendChild(box);

    let icon = box.querySelector(".icon"); // Lấy phần tử icon bên trong box
    icon.addEventListener("click", function() {
        boxFull.removeChild(box);
    });
}