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
                 str = prompt("Nhập chuỗi của bạn:");
                break;
            case "2":
                console.log("Chuỗi bạn nhập:", str);
                break;
            case "3":
                str = str.trim();
                console.log("Chuỗi sau khi loại bỏ khoảng trắng:", str);
                break;
            case "4":
                let reversedStr = str.split('').reverse().join('');
                console.log("Chuỗi đảo ngược:", reversedStr);
                    break;

            case "5":
                let wordCount = str.split(/\s+/).length;
                console.log("Số lượng từ trong chuỗi:", wordCount);
                break;
            case "6":
                let charToFind = prompt("Nhập ký tự cần tìm:");
                if (str.includes(charToFind)) {
                    console.log(`Tìm thấy ký tự '${charToFind}' trong chuỗi.`);
                    let charToReplace = prompt("Nhập ký tự thay thế:");
                    str = str.replace(new RegExp(charToFind, 'g'), charToReplace);
                    console.log("Chuỗi sau khi thay thế:", str);
                } else {
                    console.log(`Không tìm thấy ký tự '${charToFind}' trong chuỗi.`);
                }

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
