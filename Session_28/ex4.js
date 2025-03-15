function main(){
    let rectangle = {
        width: 10,
        height: 5,
        getAre() {
            return this.width * this.height;
        }
    }

    for(let key in rectangle){
        if(typeof rectangle[key] === "function"){
            console.log(key +  `:` + rectangle[key]());
        }else{
            console.log(key + `:` + rectangle[key]);
        }

    }
}

main();