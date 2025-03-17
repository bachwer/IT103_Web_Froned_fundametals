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

let products = [];

async function addProduct(n) {
    for (let i = 0; i < n; i++) {
        let product = {
            id: products.length + 1,
            name: await input("Enter Product Name: "),
            price: parseFloat(await input("Enter Product Price: ")),
            category: await input("Enter Product Category: "),
            quantity: parseInt(await input("Enter Product Quantity: "))
        };
        products.push(product);
    }
    console.log("Product(s) added successfully.");
}

function showProducts() {
    console.table(products);
}

async function showProductById() {
    let id = +await input("Enter Product ID: ");
    let product = products.find(p => p.id === id);
    if (product) {
        console.table([product]);
    } else {
        console.log("Product not found.");
    }
}

async function updateProduct() {
    let id = +await input("Enter Product ID to update: ");
    let index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index].name = await input("Enter Product Name: ");
        products[index].price = parseFloat(await input("Enter Product Price: "));
        products[index].category = await input("Enter Product Category: ");
        products[index].quantity = parseInt(await input("Enter Product Quantity: "));
        console.log("Product updated successfully.");
    } else {
        console.log("Product not found.");
    }
}

async function deleteProduct() {
    let id = +await input("Enter Product ID to delete: ");
    let index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        console.log("Product deleted successfully.");
    } else {
        console.log("Product not found.");
    }
}

async function filterProductsByPrice() {
    let minPrice = parseFloat(await input("Enter minimum price: "));
    let maxPrice = parseFloat(await input("Enter maximum price: "));
    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    console.table(filteredProducts);
}

async function main() {
    while (true) {
        console.log("1. Thêm sản phẩm vào danh sách sản phẩm.");
        console.log("2.Hiển thị tất cả sản phẩm");
        console.log("3. Hiển thị chi tiết sản phẩm theo id.");
        console.log("4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm");
        console.log("5.Xóa sản phẩm theo id");
        console.log("6. Lọc sản phẩm theo khoảng giá.");
        console.log("7. Exit");

        let menu = await input("Enter your choice: ");
        switch (menu) {
            case "1":
                let n = +await input("Enter number of products to add: ");
                await addProduct(n);
                break;
            case "2":
                showProducts();
                break;
            case "3":
                await showProductById();
                break;
            case "4":
                await updateProduct();
                break;
            case "5":
                await deleteProduct();
                break;
            case "6":
                await filterProductsByPrice();
                break;
            case "7":
                console.log("Exited");
                return;
            default:
                console.log("Invalid choice.");
        }
    }
}

main();