const form = document.getElementById('form-data');
const productName = document.getElementById('product')
const productPrice = document.querySelector('#price')
const productDeskrip = document.querySelector('#deskrip')
const productBranches = document.getElementById("branches")
const submit = document.querySelector('#submitData')
const input = document.querySelectorAll("input")
const myTable = document.getElementById("myTable")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const Name = document.getElementById("product").value;
    const Category = document.getElementById("category").value;
    const file = document.getElementById("images").value;
    const branches = document.getElementById("branches").value;
    const deskrip = document.getElementById("deskrip").value;
    const price = document.getElementById("price").value;

    //jika Product Name melebihi 10 karakter 
    if (productName.value.length > 10) {
        alert("Last Name must not exceed 25 characters.")
    }
    // Product Name dan Product Price tidak boleh kosong
    if (productPrice.value.length == 0 && productName.value.length == 0) {
        alert("Please enter a valid Prouct name.")
    }
    // Procut Name tidak boleh mengandung karakter seperti ( @/#{} )
    if (productName.value.match(/[\#\{\}\@\/\(\)]/g) !== null) {
        alert("Name must not contain symbols.")
    }

    // Validasi input setiap form bahwa field tidak boleh kosong
    if (productName.value === '') {
        alert(`The ${productName.name} field must befilled`)
        productName.style.border = '2px solid red';
    } else {
        productName.style.border = '';
    }
    if (productPrice.value === '') {
        alert(`The ${productPrice.name} field must befilled`)
        productPrice.style.border = '2px solid red';
    } else {
        productPrice.style.border = '';
    }
    if (productDeskrip.value === '') {
        alert(`The ${productDeskrip.name} field must befilled`)
        productDeskrip.style.border = '2px solid red';
    } else {
        productDeskrip.style.border = '';
    }

    const newRow = myTable.insertRow();
    const nameCell = newRow.insertCell();
    const categoryCell = newRow.insertCell();
    const fileCell = newRow.insertCell();
    const branchesCell = newRow.insertCell();
    const deskripCell = newRow.insertCell();
    const priceCell = newRow.insertCell();
    nameCell.innerHTML = Name;
    categoryCell.innerHTML = Category;
    fileCell.innerHTML = file;
    branchesCell.innerHTML = branches;
    priceCell.innerHTML = price;
    deskripCell.innerHTML = deskrip;

    form.reset();

});
// delete row
const tampungData = document.querySelector('#tampungData')
const deleteTable = document.querySelector('#delete')
deleteTable.addEventListener('click', function() {
        myTable.deleteRow(-1)
    })
    // search data
const searchData = document.querySelector('#search')
const inputText = document.querySelector('#input-text')
searchData.addEventListener('click', function() {
    const text = document.querySelector('#input-text').value

    if (text.value !== null) {
        alert(text)
    }
});