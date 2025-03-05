
let index = 0;
document.write("a.")
document.write("<br>")
for(let j = 0; j < 10; j++){

    for(let i = 10 - index; i > 0; i--){
        document.write("*")
    }
    document.write("<br>")
    index++;
}

index = 10;
document.write("b.")
document.write("<br>")
for(let j = 0; j < 10; j++){

    for(let i = 10 - index + 1; i > 0; i--){
        document.write("*")
    }
    document.write("<br>")
    index--;
}

index = 10;
document.write("c.")
document.write("<br>")


for(let j = 0; j < 10; j++){

    for(let i =12 - index; i <= 10; i++){
        document.write("&nbsp; ")
    }

    for(let i = 10 - index + 1; i > 0; i--){


            document.write("*")

    }
    document.write("<br>")
    index--;
}


index = 0;
document.write("d.")
document.write("<br>")


for(let j = 0; j < 10; j++){
    for(let i = 0; i < index; i++){
        document.write("&nbsp; ")
    }

    for(let i = 10 - index; i > 0; i--){
        document.write("*")
    }
    document.write("<br>")
    index++;
}