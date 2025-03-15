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

let employees = {
    id: [],
    name: [],
    positions: [],
    salary:[]
}

async function addEmployees(n){
    let l = employees.id.length;
    for(let i = employees.id.length ; i < n + l; i++){
        employees.id[i] = i + 1
        employees.name[i] = await input("Enter Name: ");
        employees.positions[i] = await input("Enter Position: ");
        employees.salary[i] = await input("Enter Salary: ");
        console.log("------------");
    }
}
function showEmployees(){
  if (employees.id.length > 0){
      console.log("ID: Name - Position - Salary");
      console.log("============================");
      for (let i = 0; i < employees.id.length  ; i++) {
          console.log("ID" + employees.id[i] + ` : ` + employees.name[i] + ` - ` + employees.positions[i] + ' - ' + employees.salary[i]);
          console.log("============================");
      }
  }else {
      console.log("No employees found");
  }
}

async function deleteEmployees(n){
    let pos = +await input("Enter id to delete: ");
    pos--;
    if(typeof employees.id[pos] !== "undefined"){
        employees.id.splice(pos, 1);
        employees.name.splice(pos, 1);
        employees.positions.splice(pos, 1);
        employees.salary.splice(pos, 1);
        console.log("Deleted Successfully!");
    }else{
        console.log("No employees found");
    }

}

async function updateSalary(){
    let pos = +await input("Enter id to update salary: ");
    pos--;
    if(typeof employees.id[pos] !== "undefined"){
        employees.salary[pos] = await input("Enter salary to update salary: ");
        console.log("Update Successfully!");
    }else {
        console.log("No employees found");
    }
}

async function findEmployees(){
    let check = false
    let name = await input("Enter name to search: ");
    for (let i = 0; i < employees.id.length  ; i++) {
       if(employees.name[i].includes(name)){
           console.log("ID" + employees.id[i] + ` : ` + employees.name[i] + ` - ` + employees.positions[i] + ' - ' + employees.salary[i]);
           check = true;
       }
    }
    if(!check){
        console.log("No employees found");
    }
}





async function main() {
    while (1) {
        console.log("1.Thêm nhân viên mới.")
        console.log("2.Hiện thị tất cả nhân viên. ")
        console.log("3.Xóa nhân viên theo id.")
        console.log("4.Cập nhật mức lương của nhân viên theo id")
        console.log("5.Tìm kiếm nhân viên theo tên.")
        console.log("6.Thoat")
        let menu = await input("Enter your choice:");
        switch (menu) {
            case "1":
                let n = +await input("Enter quantity Employees want to add: ");
                await addEmployees(n);
                break;
            case "2":
                showEmployees();
                break;
            case "3":
                await deleteEmployees();
                break;
            case "4":
                await updateSalary();
                break;
            case "5":
                await findEmployees();
                break;


            case "6":
                console.log("Exited");
                return;
            default:
                console.log("invalid!!");
                break;

        }

    }


}
main();