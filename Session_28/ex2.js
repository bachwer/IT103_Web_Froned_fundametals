function main(){
    let car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    }
    for(let i in car){
        console.log(i + ": " + car[i]);
    }
    console.log("")
    const newKey = 'color';
    car[newKey] = "red";
    car.year = 2022;

    for(let i in car){
        console.log(i + ": " + car[i]);
    }
}
main();