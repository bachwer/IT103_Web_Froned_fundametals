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

async function main() {
    let str = "";
    while (true) {
        console.log("\n1. Nhập chuỗi");
        console.log("2. Hiển thị chuỗi");
        console.log("3. Tính độ dài của chuỗi");
        console.log("4. Đếm số lần xuất hiện của một ký tự");
        console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
        console.log("6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ");
        console.log("7. Thoát chương trình");

        let menu = await input("Nhập lựa chọn:");

        switch (menu) {
            case "1":
                str = await input("Nhập chuỗi:");
                break;
            case "2":
                console.log("Chuỗi hiện tại:", str || "(Chưa có chuỗi nào)");
                break;
            case "3":
                console.log("Độ dài của chuỗi:", str.length);
                break;
            case "4":
                if (!str) {
                    console.log("Chưa có chuỗi nào.");
                    break;
                }
                let char = await input("Nhập ký tự cần đếm:");
                let count = str.split(char).length - 1;
                console.log(`Số lần xuất hiện của '${char}':`, count);
                break;
            case "5":
                let reversed = str.split('').reverse().join('');
                console.log(str === reversed ? "Chuỗi đối xứng" : "Chuỗi không đối xứng");
                break;
            case "6":
                str = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                console.log(str);
                break;
            case "7":
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    }
}

main();
