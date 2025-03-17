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

let menu = {};

async function addDish() {
    let category = await input("Enter category: ");
    let name = await input("Enter dish name: ");
    let price = parseFloat(await input("Enter price: "));
    let description = await input("Enter description: ");

    if (!menu[category]) {
        menu[category] = [];
    }

    menu[category].push({ name, price, description });
    console.log("Dish added successfully.");
}

async function deleteDish() {
    let name = await input("Enter dish name to delete: ");

    for (let category in menu) {
        let index = menu[category].findIndex(dish => dish.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            menu[category].splice(index, 1);
            console.log("Dish deleted successfully.");
            return;
        }
    }
    console.log("Dish not found.");
}

async function updateDish() {
    let name = await input("Enter dish name to update: ");

    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name.toLowerCase() === name.toLowerCase());
        if (dish) {
            dish.name = await input("Enter new name: ");
            dish.price = parseFloat(await input("Enter new price: "));
            dish.description = await input("Enter new description: ");
            console.log("Dish updated successfully.");
            return;
        }
    }
    console.log("Dish not found.");
}

function showMenu() {
    console.log("Menu:");
    for (let category in menu) {
        console.log(`\nCategory: ${category}`);
        console.table(menu[category]);
    }
}

async function searchDish() {
    let name = await input("Enter dish name to search: ");
    let results = [];

    for (let category in menu) {
        let found = menu[category].filter(dish => dish.name.toLowerCase().includes(name.toLowerCase()));
        results = results.concat(found);
    }

    if (results.length > 0) {
        console.table(results);
    } else {
        console.log("Dish not found.");
    }
}

async function main() {
    while (true) {
        console.log("\n1.Thêm món ăn vào danh mục.");
        console.log("2. Xóa món ăn theo tên khỏi danh mục.");
        console.log("3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).");
        console.log("4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.");
        console.log("5. Tìm kiếm món ăn theo tên trong toàn bộ menu.");
        console.log("6. Exit");

        let choice = await input("Enter your choice: ");
        switch (choice) {
            case "1":
                await addDish();
                break;
            case "2":
                await deleteDish();
                break;
            case "3":
                await updateDish();
                break;
            case "4":
                showMenu();
                break;
            case "5":
                await searchDish();
                break;
            case "6":
                console.log("Exited.");
                return;
            default:
                console.log("Invalid choice.");
        }
    }
}

main();