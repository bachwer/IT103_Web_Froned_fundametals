function main(){
    const cart = {
        name: ["Mèn mén", "Mì tôm", "Bánh bao"],
        price: [30000, 5000, 15000],
        quantity: [2,1,3],
        totalMoney(){
            let total = 0 ;
            for(let i = 0; i < cart.price.length; i++){
                total += (this.price[i] * this.quantity[i])
            }
            return total;
        }
    }

    for(let i = 0; i < cart.name.length; i++){

            console.log(cart.name[i] + ` - ` + cart.price[i] + ` - ` + cart.quantity[i] + ``);
    }

    console.log("Total Money: " + cart.totalMoney());


}

main();