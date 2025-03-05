for(let i = 100; i <= 999; i++){
    for(let j =0 ; j < 3; j++){
        let num = i.toString().split('');
        if(i ===   Math.pow(parseInt(num[0]), 3) + Math.pow(parseInt(num[1]), 3) +Math.pow(parseInt(num[2]), 3)){
            console.log(i);
        }
    }



}