// const products = [
//     {
//         id: 1,
//         name: 'Laptop Dell XPS 15',
//         price: 35990000,
//         image: 'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0',
//         description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
//     },
//     {
//         id: 2,
//         name: 'iPhone 15 Pro Max',
//         price: 32990000,
//         image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__5_2_1_1.jpg',
//         description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
//     },
//     {
//         id: 3,
//         name: 'Samsung Galaxy S24 Ultra',
//         price: 28990000,
//         image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
//         description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
//     },
//     {
//         id: 4,
//         name: 'Tai nghe Sony WH-1000XM5',
//         price: 7990000,
//         image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbup1SYXyI_vG87-7sDMiBEIS1FvI5feJE6ZGCuTcZC-ScwhGpvnqxVCUKAh2Fd-33ZzwSUXOkmMbOvzmX3vZkYO_FlmGmfKu1IkLr4s7XoAxNkmJgIuXF',
//         description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
//     },
//     {
//         id: 5,
//         name: 'Apple Watch Series 9',
//         price: 11990000,
//         image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
//         description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
//     },
//     {
//         id: 6,
//         name: 'Loa JBL Charge 5',
//         price: 3990000,
//         image: 'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/charge-5/Loa-JBL-Charge-5.jpg',
//         description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
//     }
// ];
// localStorage.setItem("arr", JSON.stringify(products))
let product = JSON.parse(localStorage.getItem("arr")) || [];
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    let input = document.getElementById("search").value;
    let boxFull = document.getElementById("container");
    boxFull.innerText = "";




   for( let i = 0; i < product.length; i++ ) {

       if((product[i].name).toLowerCase().includes(input.toLowerCase())){

          let box = document.createElement("div");
          box.innerHTML= `
            <img src="${product[i].image}"alt="">
            <h3>${product[i].name}</h3>
            <p>${product[i].description}</p>
            <p><strong>Giá:</strong> ${product[i].price.toLocaleString()} VND</p>
            <button class="btn">Buy</button>
    `
          box.classList.add("box");

          boxFull.appendChild(box);
      }
   }

})