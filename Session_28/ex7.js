function main(){
    let students = {
        name: ["Trần Trí Dương", "Hà Bích Ngọc", "Bùi Thái Sơn"],
        scores: {
            math: [9, 3, 9.5],
            english:[8, 2, 9],
            literature: [7, 5, 9],
        },
        calculateGPA(i){
           return (this.scores.math[i] + this.scores.english[i] + this.scores.literature[i] ) / this.scores.math.length;
        }
    }
    const count = students.scores.math.length;

    const highGPA = [...Array(count).keys()].filter(i => students.calculateGPA(i) >=  8);

    for(let i = 0; i < highGPA.length; i++) {
        console.log(students.name[highGPA[i]] + " - " + students.calculateGPA(highGPA[i]).toFixed(2) );
    }


}
main();