(() => {

    var i = document.getElementById("filter");
    for (let name in stores) {
        i.innerHTML += `<option value"${name}">${name}</option>`;
    }

    i.addEventListener('change', (e) => {
        var x = i.value;
        if (x == "all") {
            document.getElementById("prod-table").getElementsByTagName("tbody")[0] = '';
            all();
        }
        else {
            document.getElementById("prod-table").getElementsByTagName("tbody")[0] = '';
            storeProducts(x);
        }
    });

    function all() {
        var a = document.getElementById("prod-table").getElementsByTagName("tbody")[0];
        a.innerHTML = '';
        var b = 0;
        for (let name in products) {
            a.innerHTML += `<tr>
                <th scope="row">${name}</th>
                <td>${products[name].manufacturer}</td>
                <td>${products[name].barcode}</td>
                <td><span class="act-price">Rs. ${products[name].sp}</span><br><span class="error dis-price" style="display:none;">Rs. ${products[name].sp - (products[name].discount * 0.01 * products[name].sp)}</span></td>
                <td>${lowStock()}</td>
                <td class="righto">
                    <button type="button" data-toggle="modal" data-target="#viewProdInfo" class="btn btn-secondary" onclick="prodInfo('${name}')">View</button>
                    <button type="button" onclick="editProd('${name}')" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger" onclick="deleteProd('${name}')">Delete</button>
                </td>
            </tr>`;
            function lowStock() {
                if (products[name].stock < 10) {
                    return `<span class="badge badge-danger">${products[name].stock}</span>`;
                }
                else return `<span class="badge badge-success">${products[name].stock}</span>`;
            }
            if (products[name].discount != 0) {
                document.getElementsByClassName("act-price")[b].style.textDecoration = "line-through";
                document.getElementsByClassName("dis-price")[b].style.display = "inline";
            }
            b++;
        };
        emptyTableCheck();
    }

    all();

    function storeProducts(storeName) {
        var a = document.getElementById("prod-table").getElementsByTagName("tbody")[0];
        a.innerHTML = '';
        var b = 0;
        for (let name in products) {
            if (stores[storeName].products[name]) {
                a.innerHTML += `<tr>
                <th scope="row">${name}</th>
                <td>${products[name].manufacturer}</td>
                <td>${products[name].barcode}</td>
                <td><span class="act-price">Rs. ${products[name].sp}</span><br><span class="error dis-price" style="display:none;">Rs. ${products[name].sp - (products[name].discount * 0.01 * products[name].sp)}</span></td>
                <td>${lowStock()}</td>
                <td class="righto">
                    <button type="button" data-toggle="modal" data-target="#viewProdInfo" class="btn btn-secondary" onclick="prodInfo('${name}')">View</button>
                    <button type="button" onclick="editProd('${name}')" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger" onclick="deleteProd('${name}')">Delete</button>
                </td>
            </tr>`;
                function lowStock() {
                    if (products[name].stock < 10) {
                        return `<span class="badge badge-danger">${products[name].stock}</span>`;
                    }
                    else return `<span class="badge badge-success">${products[name].stock}</span>`;
                }
                if (products[name].discount != 0) {
                    document.getElementsByClassName("act-price")[b].style.textDecoration = "line-through";
                    document.getElementsByClassName("dis-price")[b].style.display = "inline";
                }
                b++;
            }
        };
        emptyTableCheck();
    };

    function emptyTableCheck() {
        var a = document.getElementById("prod-table").getElementsByTagName("tbody")[0];
        if (a.innerHTML == '') {
            a.innerHTML = `<tr><td colspan='6' style='text-align:center;'><h5>No products available! Add some new products</h5></td></tr>`;
        }
    }

})()

function prodInfo(prodName) {
    document.getElementById("prodInfoHead").innerHTML = prodName;
    var x = products[prodName];
    document.getElementById("prod-detail").innerHTML = `<li><b>Manufacturer:</b> ${x.manufacturer}</li>
                    <li><b>Barcode:</b> ${x.barcode}</li>
                    <li><b>Cost Price:</b> Rs. ${x.cp}</li>
                    <li><b>Selling Price:</b> Rs. ${x.sp}</li>
                    <li><b>Discount:</b> ${x.discount}%</li>
                    <li><b>Marked Price:</b>Rs. ${x.sp - (x.discount * 0.01 * x.sp)}</li>
                    <li><b>In Stock:</b> ${x.stock}</li>
                    <li><b>Pieces Sold:</b> ${x.sold}</li>
                    <li><b>Description:</b> ${x.description}</li>`;
};

function addNewProd() {
    var newProd = {
        [$('#prodName').val()]: {
            'manufacturer': document.getElementById('manufacturer').value,
            'barcode': document.getElementById('barcode').value,
            'cp': document.getElementById('cp').value,
            'discount': document.getElementById('discount').value,
            'sp': document.getElementById('sp').value,
            'stock': document.getElementById('stock').value,
            'sold': 0,
            'mp': document.getElementById('mp').value,
            'description': document.getElementById('description').value,
            'date': 'never',
            'profit': 0,
            'net': 0
        }
    };
    newProd[$(prodName).val()].profit = (newProd[$("#prodName").val()].mp - newProd[$("#prodName").val()].cp);
    Object.assign(products, newProd);
    localStorage.products = JSON.stringify(products);
    firebase.database().ref("/products/" + localStorage.token).update(newProd).then(() => reloadPage());
}

function reloadPage() {
    window.location.reload();
}

function deleteProd(name) {
    delete products[name];
    localStorage.products = JSON.stringify(products);
    firebase.database().ref("/products/" + localStorage.token).set(products)
        .then(() => {
            reloadPage();
        })
};

function editProd(pName) {
    document.getElementById("addProductBtn").click();
    var x = products[pName];
    //document.getElementById("prodName").value = pName;
    $('#prodName')[0].value = pName;
    $('#manufacturer')[0].value = x.manufacturer;
    $('#barcode')[0].value = x.barcode;
    $('#cp')[0].value = x.cp;
    $('#discount')[0].value = x.discount;
    $('#sp')[0].value = x.sp;
    $('#stock')[0].value = x.stock;
    $('#description')[0].value = x.description;
    document.getElementById("addNewProdBtn").addEventListener("click", editProdListenerFunction)
}

var editProdListenerFunction = (e) => {
    delete products[pName];
    localStorage.products = JSON.stringify(products);
    firebase.database().ref("/products/" + localStorage.token).set(products).then(addNewProd())
};

function clearModal() {
    $('#prodName')[0].value = '';
    $('#manufacturer')[0].value = '';
    $('#barcode')[0].value = '';
    $('#cp')[0].value = '';
    $('#discount')[0].value = '';
    $('#sp')[0].value = '';
    $('#stock')[0].value = '';
    $('#description')[0].value = '';
    document.getElementById("addNewProdBtn").removeEventListener("click", editProdListenerFunction);
}

function calcMarked() {
    var a = document.getElementById("sp").value;
    var b = document.getElementById("discount").value;
    var c = document.getElementById("mp");
    c.value = (a - (a * 0.01 * b)).toFixed(2);
    document.getElementById('marked').innerHTML = c.value;
}
