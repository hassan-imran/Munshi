


(() => {

    var i = document.getElementById("filter");
    for (let name in stores) {
        i.innerHTML += `<option value"${name}">${name}</option>`;
    }

    i.addEventListener('change', (e) => {
        var x = i.value;
        if (x == "all") {
            document.getElementById("sales-table").getElementsByTagName("tbody")[0] = '';
            all();
        }
        else {
            document.getElementById("sales-table").getElementsByTagName("tbody")[0] = '';
            storeSales(x);
        }
    });

    function all() {
        var a = document.getElementById("sales-table").getElementsByTagName("tbody")[0];
        a.innerHTML = '';
        for (let name in products) {
            a.innerHTML += `<tr>
    <th scope="row">${name}</th>
    <td>${products[name].barcode}</td>
    <td><span class="badge badge-secondary">${products[name].sold}</span></td>
    <td>${products[name].date}</td>
    <td>Rs. ${products[name].mp * products[name].sold}</span></td>
    <td class="righto">
        <button type="button" data-toggle="modal" data-target="#viewSaleInfo" class="btn btn-primary" onclick="saleInfo('${name}')">View</button>
        <button type="button" onclick="addProdSale('${name}')" data-toggle="modal" data-target="#addSales" class="btn btn-success">Add Sale</button>
    </td>
</tr>`;
        };
        emptyTableCheck();
    }

    all();

    function storeSales(storeName) {
        var a = document.getElementById("sales-table").getElementsByTagName("tbody")[0];
        a.innerHTML = '';
        var b = 0;
        for (let name in products) {
            if (stores[storeName].products[name]) {
                a.innerHTML += `<tr>
    <th scope="row">${name}</th>
    <td>${products[name].barcode}</td>
    <td><span class="badge badge-secondary">${products[name].sold}</span></td>
    <td>${products[name].date}</td>
    <td>Rs. ${products[name].mp * products[name].sold}</span></td>
    <td class="righto">
        <button type="button" data-toggle="modal" data-target="#viewSaleInfo" class="btn btn-primary" onclick="saleInfo('${name}')">View</button>
        <button type="button" onclick="addProdSale('${name}')" data-toggle="modal" data-target="#addSales" class="btn btn-success">Add Sale</button>
    </td>
</tr>`;
            }
        };
        emptyTableCheck();
    };

    function emptyTableCheck() {
        var a = document.getElementById("sales-table").getElementsByTagName("tbody")[0];
        if (a.innerHTML == '') {
            a.innerHTML = `<tr><td colspan='6' style='text-align:center;'><h5>No products available! Add some new products</h5></td></tr>`;
        }
    }

})()

function saleInfo(prodName) {
    document.getElementById("saleInfoHead").innerHTML = prodName;
    var x = products[prodName];
    document.getElementById("sales-detail").innerHTML = `<li><b>Manufacturer:</b> ${x.manufacturer}</li>
                        <li><b>Barcode:</b> ${x.barcode}</li>
                        <li><b>Pieces Sold: </b> ${x.sold}</li>
                        <li><b>Cost Price: </b>Rs. ${x.cp}</li>
                        <li><b>Marked Price:</b> Rs. ${x.mp}</li>
                        <li><b>Profit:</b> Rs. ${x.profit}</li>
                        <li><b>Total Revenue:</b> Rs. ${x.mp * x.sold}</li>
                        <li><b>Total Profit:</b> Rs. ${x.profit * x.sold}</li>
                        <li><b>Units in stock:</b> ${x.stock}</li>`;
};

function addProdSale(pName) {
    var x = products[pName];
    document.getElementById("sales-list").innerHTML = `
                        <li><b>Product:</b> <span id="addNewSale-Prod">${pName}</span></li>
                        <li><b>Manufacturer:</b> ${x.manufacturer}</li>
                        <li><b>Barcode:</b> ${x.barcode}</li>
                        <li><b>Marked Price:</b>Rs. ${x.sp - (x.discount * 0.01 * x.sp)}</li>
                        <li><b>Profit per unit:</b> Rs. ${x.profit}</li>
                        <li><b>Units in stock:</b> ${x.stock}</li>`;
    document.getElementById("sold").value = "";
}

function addNewSale() {
    var pName = document.getElementById("addNewSale-Prod").innerHTML;
    var x = products[pName];
    x.sold = (x.sold) + Number(document.getElementById('sold').value);
    x.date = document.getElementById('date').value;
    x.stock = +document.getElementById('stock-added').value + x.stock - document.getElementById('sold').value;

    localStorage.products = JSON.stringify(products);
    firebase.database().ref("/products/" + localStorage.token).update(products).then(() => reloadPage());
}

function reloadPage() {
    window.location.reload();
}
