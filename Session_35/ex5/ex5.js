let product = {
    code: [],
    name: [],
    status: [],
}

let addProduct = document.getElementById('addProduct');
let cancel = document.getElementById('cancel');
let cancel1 = document.getElementById('close');
let add= document.getElementById('add');
addProduct.addEventListener('click', function () {
    let inputInf = document.getElementById("input-inf");
    if (inputInf) {
        inputInf.style.display = 'flex';
    }
});
cancel.addEventListener('click', function () {
    let inputInf = document.getElementById("input-inf");
    if (inputInf) {
        inputInf.style.display = 'none';
    }
})
cancel1.addEventListener('click', function () {
    let inputInf = document.getElementById("input-inf");
    if (inputInf) {
        inputInf.style.display = 'none';
    }
})
add.addEventListener('click', function () {
    let code = document.getElementById("codeProduct").value.trim();
    let name = document.getElementById("nameProduct").value.trim();
    let selectedStatus = document.querySelector('input[name="status"]:checked');
    let text = document.getElementById("redText");
    let text2 = document.getElementById("redText2");

    if(name === ""){
        document.getElementById("nameProduct").style.border = "1px solid red";
        text.style.display = "flex";
        return;
    } else {
        document.getElementById("nameProduct").style.border = "";
        text.style.display = "none";
    }

    if(code === ""){
        document.getElementById("codeProduct").style.border = "1px solid red";
        text2.style.display = "flex";
        return;
    } else {
        document.getElementById("codeProduct").style.border = "";
        text2.style.display = "none";
    }

    if(!selectedStatus){
        alert("Vui lòng chọn trạng thái");
        return;
    }

    let newProduct = {
        code: code,
        name: name,
        status: selectedStatus.value === "active" ? "active" : "inactive"
    };

    categories.push(newProduct);
    document.getElementById("input-inf").style.display = "none";
    document.getElementById("codeProduct").value = "";
    document.getElementById("nameProduct").value = "";
    selectedStatus.checked = false;

    renderTable();
});
let categories = [
    { code: "DM001", name: "Quần áo", status: "active" },
    { code: "DM002", name: "Kính mắt", status: "inactive" },
    { code: "DM003", name: "Giày dép", status: "active" },
    { code: "DM004", name: "Thời trang nam", status: "inactive" },
    { code: "DM005", name: "Thời trang nữ", status: "inactive" },
    { code: "DM006", name: "Hoa quả", status: "inactive" },
    { code: "DM007", name: "Rau", status: "active" },
    { code: "DM008", name: "Điện thoại", status: "inactive" }
];

function renderTable() {
    let table = document.querySelector(".table");
    table.innerHTML = `
        <tr>
            <td style="width: 20%;" class="tdc">Mã danh mục <i class="fa-solid fa-arrow-down"></i></td>
            <td style="width: 40%;" class="tdc">Tên danh mục <i class="fa-solid fa-arrow-down"></i></td>
            <td style="width: 20%;" class="tdc">Trạng thái</td>
            <td style="width: 20%;" class="tdc">Chức năng</td>
        </tr>
    `;

    categories.forEach((item, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td style="color: ${item.status === "active" ? "green" : "red"}">
                ${item.status === "active" ? "Đang hoạt động" : " Ngừng hoạt động"}
            </td>
            <td>
                <button class="edit" data-index="${index}">✏️</button>
                <button class="delete" data-index="${index}">🗑️</button>
            </td>
        `
        row.classList.add("row");
        table.appendChild(row);
    });

    document.querySelectorAll(".edit").forEach(btn =>
        btn.addEventListener("click", editCategory)
    );
    document.querySelectorAll(".delete").forEach(btn =>
        btn.addEventListener("click", deleteCategory)
    );
}

function deleteCategory(event) {
    let index = event.target.getAttribute("data-index");
    categories.splice(index, 1);
    renderTable();
}

function editCategory(event) {
    let index = event.target.getAttribute("data-index");
    let category = categories[index];

    document.getElementById("codeProduct").value = category.code;
    document.getElementById("nameProduct").value = category.name;
    document.getElementById(category.status === "active" ? "active" : "noActive").checked = true;

    document.getElementById("input-inf").style.display = "flex";

    document.getElementById("add").onclick = function () {
        categories[index] = {
            code: document.getElementById("codeProduct").value,
            name: document.getElementById("nameProduct").value,
            status: document.getElementById("active").checked ? "active" : "inactive"
        };
        document.getElementById("input-inf").style.display = "none";
        renderTable();
    };
}

document.addEventListener("DOMContentLoaded", renderTable);
