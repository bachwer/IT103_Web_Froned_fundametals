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


let product = {
    id: [1, 2, 3, 4],
    name: ["mèn mén", "mứt", "cơm lam", "bánh đậu xanh"],
    price: [2000, 80000, 40000, 60000],
    quantity: [20, 21, 15, 30],
    category: ["Món ăn dân Mông", "Món ăn dân tộc kinh", "Món ăn dân Mông", "Món ăn dân tộc kinh"]
}

async function main() {
    let total = 0;
    while (1) {
        console.log("1.Hiển thị các sản phẩm theo tên danh mục.")
        console.log("2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.")
        console.log("3.Sắp xếp các sản phẩm trong cửa hàng theo giá")
        console.log("4.Tính số tiền thanh toán trong giỏ hàng")
        console.log("5.Thoat")
        let menu = await input("Enter your choice: ");

        switch (menu) {
            case "1":
                console.table(product)
                break;
            case "2":
                let id = +await input("Enter id product to buy: ");
                if(product.id.includes(id) === true) {
                    const index = product.id.findIndex(num => num === id);
                    let quantity = +await input("Enter quantity book to buy: ");
                    if(product.quantity[index] >= quantity){
                        product.quantity[index] -= quantity;
                        total += (product.price[index] * quantity);

                        console.log("success!!")
                        break;
                    }else{
                        console.log("Quantity invalid");
                    }
                }else{
                    console.log("ID invalid");
                }
                break;
            case "3":
                while (1) {
                    console.log("1.Increase");
                    console.log("2.Decrease");
                    let check = +await input("Enter your choice: ");
                    if (check === 1 || check === 2) {
                        for(let i = 0; i < product.id.length - 1; i++){
                            for(let j = i; j < product.id.length; j++){
                                if (check === 1 ? product.price[i] > product.price[j] : product.price[i] < product.price[j]) {
                                    [product.id[i], product.id[j]] = [product.id[j],product.id[i]];
                                    [product.name[i], product.name[j]] = [product.name[j],product.name[i]];
                                    [product.price[i], product.price[j]] = [product.price[j],product.price[i]];
                                    [product.quantity[i], product.quantity[j]] = [product.quantity[j],product.quantity[i]];
                                    [product.category[i], product.category[j]] = [product.category[j],product.category[i]];
                                }
                            }
                        }

                        break;
                    } else {
                        console.log("Invalid!!!");
                    }
                }

                break;
            case "4":
              console.log("Total: " + total);
                break;
            case "5":
                console.log("exited");
                return 0;
        }
    }
}
main();



