const readline = require('readline');

function input(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question + " ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function inputStudents(arrName){
    let n = +await input("Enter number students to input: ")
    for(let i = 0; i < n ; i++){
        arrName[i] = await input("SST " + (i + 1) + ": ");
    }
    console.log("success!")
}

function showStudents(arrName){
        console.log(arrName.join("\n"));
}

async function findStudent(arrName){
    let world = await input("Enter name");
    let temp = [];
    let index = 0;
    for(let i = 0; i < arrName.length; i++){
        if(arrName[i].split(" ").includes(world) === true){
            temp[index] = arrName[i];
            index++;
        }
    }
    if(index > 0){
        console.log(temp.join("\n"));
    }else{
        console.log("Don't find students");
    }
}

async function deleteStudent(arrName){
    let world = await input("Enter name");
    let index = 0;
    for(let i = 0; i < arrName.length; i++){
        if(arrName[i].split(" ").includes(world) === true){
            arrName.splice(i, 1);
            index = 1;
            break;
        }
    }
    if(index > 0){
        console.log("success!");
    }else{
        console.log("Don't find students");
    }
}





async function main() {

    let arrName = [];


    while (1) {
        console.log("1.Enter list of students:");
        console.log("2.Show list of students");
        console.log("3.find student list by name:");
        console.log("4.delete student list by name:");
        console.log("5.exit");

        let menu = await input("Enter your choice:");

        switch (menu) {
            case "1":
                await inputStudents(arrName);
                break;
            case "2":
                showStudents(arrName);
                break;
            case "3":
                await findStudent(arrName);
                break;
            case "4":
               await deleteStudent(arrName);
                break;
            case "5":
                break;
        }


    }


}
main();