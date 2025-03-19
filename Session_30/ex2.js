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

let cart = {
    id: [1, 2],
    name: ["Conan", "7 chu nun"],
    prices: [2000, 80000],
    quantity: [10, 12],
    category: ["16+", "3+"],
}
let totalBooksPurchased = 0;
let totalPrice = 0;


async function showBook() {
    let search = await input("Nhập thể loại muốn xem: ");

    // Tìm vị trí của sách có thể loại trùng khớp
    let foundIndexes = cart.category
        .map((cat, index) => cat.includes(search) ? index : -1)
        .filter(index => index !== -1);

    if (foundIndexes.length > 0) {

        let result = foundIndexes.map(index => ({
            ID: cart.id[index],
            Name: cart.name[index],
            Price: cart.prices[index],
            Quantity: cart.quantity[index],
            Category: cart.category[index]
        }));

        console.table(result);
    } else {
        console.log("Không tìm thấy sách nào thuộc thể loại này.");
    }
}

async function buyBook() {
    let id = +await input("Nhập ID sách cần mua: ");
    let qty = +await input("Nhập số lượng cần mua: ");

    let index = cart.id.indexOf(id);

    if (index === -1) {
        console.log("Không tìm thấy sách với ID này.");
        return;
    }

    if (cart.quantity[index] < qty) {
        console.log("Không đủ số lượng sách trong kho.");
        return;
    }

    cart.quantity[index] -= qty;
    totalBooksPurchased += qty;
    totalPrice += cart.prices[index] * qty;

    console.log(`Mua thành công ${qty} cuốn "${cart.name[index]}".`);
}

async function sortBooksByPrice() {
    let sortedBooks = cart.id.map((_, i) => ({
        id: cart.id[i],
        name: cart.name[i],
        price: cart.prices[i],
        quantity: cart.quantity[i],
        category: cart.category[i]
    })).sort((a, b) => a.price - b.price);

    console.table(sortedBooks);
}

async function showPurchaseSummary() {
    console.log(`Tổng số lượng sách đã mua: ${totalBooksPurchased}`);
    console.log(`Tổng tiền đã chi: ${totalPrice} VND`);
}

async function showTotalBooksInStock() {
    let totalStock = cart.quantity.reduce((sum, qty) => sum + qty, 0);
    console.log(`Tổng số lượng sách trong kho: ${totalStock}`);
}

async function AddBook(n) {
    let quantity =  cart.id.length;

    for (let i = cart.id.length; i < n + quantity; i++) {
        cart.id[i] = i + 1;
        cart.name[i] = await input("Enter name: ");
        cart.prices[i] = +await input("Enter price: ");
        cart.quantity[i] = await input("Enter quantity: ");
        cart.category[i] = await input("Enter category: ");
    }
    console.log("Success!!");

}

async function findBooks() {
    let search = await input("Enter Search: ");
    let arr = cart.id.map((_, i) => ({
        id: cart.id[i],
        name: cart.name[i],
        prices: cart.prices[i],
        quantity: cart.quantity[i],
        category: cart.category[i],
    }));

    console.table(arr.filter(cart => cart.id.includes(search)));
}


async function main() {
    while (1) {
        console.log("1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).");
        console.log("2.Thêm sách mới vào kho");
        console.log("3.Tìm kiếm sách theo tên hoặc id.");
        console.log("4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).");
        console.log("5.Sắp xếp sách theo giá:");
        console.log("6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng");
        console.log("7.Hiển thị tổng số lượng sách trong kho.");
        console.log("8.Thoát chương trình.");

        let menu = await input("Enter your choice: ");

        switch (menu) {
            case "1":
               await showBook()
                break;
            case "2":
                let n = +await input("Enter quantity book to add: ");
                await AddBook(n);
                break;
            case "3":
                await findBooks();
                break;
            case "4":
                await buyBook();
                break;
            case "5":
                await sortBooksByPrice();
                break;
            case "6":
                await showPurchaseSummary();
                break;
            case "7":
                await showTotalBooksInStock();
                break;
            case "8":
                console.log("exited");
                return;
        }


    }
}main();