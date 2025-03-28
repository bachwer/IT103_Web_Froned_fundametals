let back = document.getElementById("back-to-login");
let dataUser = JSON.parse(localStorage.getItem("dataUser")) || { userName: [], password: [] };


let i  = 1;
next();

back.addEventListener("click", function() {
    i++;
    next();
})

function next(){
    if(i % 2 !== 0){
        let h2 = document.getElementById("title");
        let box = document.getElementById("remember-box");
        let btn = document.getElementById("register-btn");
        h2.innerText = "Đăng Nhập";
        back.innerText = "Chưa có tài khoản ? Đăng ký"
        btn.innerText = "Đăng Nhập";
        box.style.display = "flex";
        btn.addEventListener( "click", function(event){

            login(event);
            return 1;
        })
    }else{
        let h2 = document.getElementById("title");
        let btn = document.getElementById("register-btn");
        let box = document.getElementById("remember-box");
        h2.innerText = "Đăng Kí";
        back.innerText = "Quay lại đăng nhập"
        btn.innerText = "Đăng Kí";
        box.style.display = "none";
        btn.addEventListener( "click", function(){
            register();
        })

    }
}


function register(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for(let i = 0; i < dataUser.userName.length; i++){
        if(dataUser.userName[i] === username){
            alert("Tên đăng nhâp trùng")
            return;
        }
    }
    dataUser.userName.push(username);
    dataUser.password.push(password);
    localStorage.setItem("dataUser", JSON.stringify(dataUser));
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    i = 1;
    next();
}

function login(event) {
    event.preventDefault();
    let check = false;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let rememberMe = document.getElementById("remember-me").checked;

    for(let i = 0; i < dataUser.userName.length; i++){
        if(dataUser.userName[i] === username && dataUser.password[i] === password){
            alert("đăng nhập thành công")
            check = true;
            break;
        }
    }
    if(check === true){
        let box = document.getElementById("container");
        box.style.display = "none";
        let boxIn = document.getElementById("welcome-box")
        boxIn.style.display = "block";
        let textBoxIN = document.getElementById("name");
        textBoxIN.innerText = username;
        localStorage.setItem("Status", "on");


        if (rememberMe) {
            localStorage.setItem("Status", "on");
            localStorage.setItem("LoggedInUser", username);
        }
    }else{
        alert("sai")

    }
}

window.onload = function() {
    let logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            let boxIn = document.getElementById("welcome-box");
            boxIn.style.display = "none";
            let box = document.getElementById("container");
            box.style.display = "block";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            i = 1;
            localStorage.setItem("Status", "off");
            next();
        });
    }
};

window.onload = function() {
    let status = localStorage.getItem("Status");
    if (status === "on") {
        let box = document.getElementById("container");
        let boxIn = document.getElementById("welcome-box");
        let username = localStorage.getItem("LoggedInUser");

        if (box && boxIn) {
            box.style.display = "none";
            boxIn.style.display = "block";

            let textBoxIN = document.getElementById("name");
            if (textBoxIN) {
                textBoxIN.innerText = username || "User";
            }
        }
    }




    let logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            localStorage.setItem("Status", "off");
            localStorage.removeItem("LoggedInUser");
            let boxIn = document.getElementById("welcome-box");
            let box = document.getElementById("container");

            if (boxIn && box) {
                boxIn.style.display = "none";
                box.style.display = "block";
            }

            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            i = 1;
            next();
        });
    }
};



