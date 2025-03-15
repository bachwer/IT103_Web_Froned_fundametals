function main() {

    let company = {
        name: "RikkeiSoft",
        location: "New York",
        employees: {
            name: ["Nguyễn Văn Luận", "Nguyễn Văn Hoàng", "Hoàng Nam Cao"],
            position: ["Developer", "Tester", "Manager"]
        }
    }

    console.log(company.name);
    console.log(company.location);

    for (let i = 0; i < company.employees.name.length; i++) {
        console.log(company.employees.name[i] + " - " + company.employees.position[i]);
    }

}

main();