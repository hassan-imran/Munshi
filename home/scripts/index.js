document.getElementById('stores').innerHTML = Object.keys(stores).length;
document.getElementById('low-stock').innerHTML = lowStock();
document.getElementById('discounted').innerHTML = discounted();
document.getElementById('total-sales').innerHTML = totalSales();
document.getElementById('user-name').innerHTML = `Welcome ${localStorage.uname}!`;

// function for turning the badge into red on products less than 10 in the inventory

function lowStock() {
    var i = 0;
    for (name in products) {
        if ((products[name].stock) < 10) {
            i++;
        }
    }
    return i;
}

//function for counting the total discounted products in the inventory

function discounted() {
    var i = 0;
    for (name in products) {
        if ((products[name].discount) > 0) {
            i++;
        }
    }
    return i;
}

// function for calculating the total sales

function totalSales() {
    var i = 0;
    for (name in products) {
        i += products[name].sold;
    }
    if (!i) {
        return 0;
    }
    else return i;
}