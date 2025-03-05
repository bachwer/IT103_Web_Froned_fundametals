
for(let i=1; i < 1000; i++){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    console.log("%cMàu sắc đã được thay đổi", `color: ${color}`);
}
