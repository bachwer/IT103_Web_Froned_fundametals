function submit(){
    let str = document.getElementById("str").value;
    let search = document.getElementById("search").value;

    // if(str.includes(search) === true){
    //     document.getElementById("text").innerText = "Tồn tại từ cần tìm kiếm";
    //
    // }else{
    //     document.getElementById("text").innerText = "Không Tồn tại từ cần tìm kiếm";
    // }

    let worlds = str.split(" ");

    for(let i = 0; i < worlds.length; i++){
        if(worlds[i] === search){
            document.getElementById("text").innerText = "Tồn tại từ cần tìm kiếm";
            return 0;
        }
    }
    document.getElementById("text").innerText = "Không Tồn tại từ cần tìm kiếm";


}