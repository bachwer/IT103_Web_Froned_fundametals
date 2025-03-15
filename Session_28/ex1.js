function main(){
    const person = {
        name: "John",
        age: 25,
        job: "Developer"
    }


    for (let key in person) {
        console.log(key +  `:` + person[key]);
    }
}
main();