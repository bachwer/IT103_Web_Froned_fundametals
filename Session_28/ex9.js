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

let book = {
    id: [],
    title: [],
    author: [],
    year: [],
    price: [],
    isAvailable: [],
}

async function addBook(n) {
    let quantity =  book.id.length;

    for (let i = book.id.length; i < n + quantity; i++) {
        book.id[i] = i + 1;
        book.title[i] = await input("Enter Title: ");
        book.author[i] = await input("Enter Author: ");
        book.year[i] = await input("Enter Year: ");
        book.price[i] = +await input("Enter Price: ");
        console.log("Choose Available :");
        while (1) {
            console.log("1.Not Available");
            console.log("2.Available");
            let menu = +await input("Enter your choice: ");
            if (menu === 1 || menu === 2) {
                book.isAvailable[i] = menu !== 1;
                break;
            } else {
                console.log("Invalid!!!");
            }
        }
        console.log("-----------------------");
    }
    console.log("Add successfully");
}

function showBook() {
    let bookTemporary = book.id.map((_, i) => ({
        id: book.id[i],
        title: book.title[i],
        author: book.author[i],
        year: book.year[i],
        price: book.price[i],
        isAvailable: book.isAvailable[i],
    }));
    console.table(bookTemporary);
    return bookTemporary;
}

async function findBooks() {
    let search = await input("Enter Search: ");
    let arr = showBook();


    console.table(arr.filter(book => book.title.includes(search)));
}

async function updateAvailable(){
    let ids = await input("Enter id book want to update available: ");
    ids--;

    console.log("Choose Available :");
    while (1) {
        console.log("1.Not Available");
        console.log("2.Available");
        let menu = +await input("Enter your choice: ");
        if (menu === 1 || menu === 2) {
            book.isAvailable[ids] = menu !== 1;
            break;
        } else {
            console.log("Invalid!!!");
        }
    }

}
async function deleteBook() {
    let ids = +await input("Enter id book want to update available: ");
    ids--;
    book.id.splice(ids,1);
    book.title.splice(ids,1);
    book.author.splice(ids,1);
    book.year.splice(ids,1);
    book.price.splice(ids,1);
    book.isAvailable.splice(ids,1);
    console.log("Deleted Successfully!");
}
function sortBook(){
    for(let i = 0; i < book.id.length - 1; i++){
        for(let j = i; j < book.id.length; j++) {
            if (book.price[i] > book.price[j]) {
                [book.id[i], book.id[j]] = [book.id[j], book.id[i]];
                [book.title[i], book.title[j]] = [book.title[j], book.title[i]];
                [book.author[i], book.author[j]] = [book.author[j], book.author[i]];
                [book.year[i], book.year[j]] = [book.year[j], book.year[i]];
                [book.price[i], book.price[j]] = [book.price[j], book.price[i]];
                [book.isAvailable[i], book.isAvailable[j]] = [book.isAvailable[j], book.isAvailable[i]];
            }
        }
    }
}

async function main() {
    while (1) {
        console.log("1.Thêm sách mới.");
        console.log("2.Hiển thị danh sách sách.");
        console.log("3.Tìm kiếm sách theo tiêu đề.");
        console.log("4.Cập nhật trạng thái mượn/trả sách theo id sách.");
        console.log("5.Xóa sách theo id sách ra khỏi danh sách.");
        console.log("6.Sắp xếp sách theo giá tăng dần.");
        console.log("7.Thoát.");
        let menu = await input("Enter your choice: ");

        switch (menu) {
            case "1":
                let n = +await input("Enter quantity book to add: ");
                await addBook(n);
                break;
            case "2":
                showBook();
                break;
            case "3":
                await findBooks()
                break;
            case "4":
                await updateAvailable();
                break;
            case "5":
               await deleteBook()
                break;
            case "6":
                sortBook();
                break;
            case "7":
                console.log("Exited");
                return;
            default:
                console.log("invalid!!");
                break;
        }
    }
}

main();







