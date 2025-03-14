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

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function rectangleArea(width, height) {
    return width * height;
}

function rectanglePerimeter(width, height) {
    return 2 * (width + height);
}

async function main() {
    while (true) {
        console.log("1. Tính diện tích hình tròn");
        console.log("2. Tính chu vi hình tròn");
        console.log("3. Tính diện tích hình chữ nhật");
        console.log("4. Tính chu vi hình chữ nhật");
        console.log("5. Thoát");

        let choice = await input("Nhập lựa chọn:");

        switch (choice) {
            case "1":
                let r1 = parseFloat(await input("Nhập bán kính hình tròn:"));
                console.log("Diện tích: " + circleArea(r1));
                break;
            case "2":
                let r2 = parseFloat(await input("Nhập bán kính hình tròn:"));
                console.log("Chu vi: " + circlePerimeter(r2));
                break;
            case "3":
                let w1 = parseFloat(await input("Nhập chiều rộng hình chữ nhật:"));
                let h1 = parseFloat(await input("Nhập chiều cao hình chữ nhật:"));
                console.log("Diện tích: " + rectangleArea(w1, h1));
                break;
            case "4":
                let w2 = parseFloat(await input("Nhập chiều rộng hình chữ nhật:"));
                let h2 = parseFloat(await input("Nhập chiều cao hình chữ nhật:"));
                console.log("Chu vi: " + rectanglePerimeter(w2, h2));
                break;
            case "5":
                return;
        }
    }
}

main();
