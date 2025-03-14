// Tính diện tích hình tròn.
//     Tính chu vi hình tròn.
//     Tính diện tích hình chữ nhật.
//     Tính chu vi hình chữ nhật.
//     Thoát.

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

function areaCircle(r){
    let area = r * 3.14 * r;
    console.log("Area of circle: ", area.toFixed(2));

}

function perimeterCircle(r){
    let perimeter = r * 3.14 * 2
    console.log("Perimeter of circle: ", perimeter.toFixed(2));
}

function areaRectangle(a,b){
    let area = a * b;
    console.log("Area of rectangle: ", area.toFixed(2));
}

function perimeterRectangle(a,b){
    let area = 2*( a + b);
    console.log("Perimeter of rectangle: ", area.toFixed(2));
}

let n;
async function main() {
    let a,b;
    while (1) {
        console.log("1.Tính diện tích hình tròn.");
        console.log("2.Tính chu vi hình tròn.");
        console.log("3.Tính diện tích hình chữ nhật.");
        console.log("4.Tính chu vi hình chữ nhật.");
        console.log("5.Thoát.");
        let menu = await input("Enter your choice:");
        switch (menu) {
            case "1":
                 n = +await input("Enter the radius: ");
                areaCircle(n);
                break;
            case "2":
                n = +await input("Enter the radius: ");
                perimeterCircle(n);
                break;
            case "3":
                a = +await input("Enter the edge A: ");
                b = +await input("Enter the edge B: ");
                areaRectangle(a, b);
                break;
            case "4":
                a = +await input("Enter the edge A: ");
                b = +await input("Enter the edge B: ");
                perimeterRectangle(a, b);
                break;
            case "5":
                console.log("Exited");
                return 0;

            default:
                break;
        }
    }
}