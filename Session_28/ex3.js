function main(){

    let book = {
        title: "JavaScript Basics",
        author: "John Smith",
        page: 200
    }

    delete book.page;


    for(let i in book){
        console.log(i + ": " + book[i]);
    }



}
main();