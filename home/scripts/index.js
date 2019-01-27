document.getElementById('stores').innerHTML = Object.keys(stores).length;
document.getElementById('low-stock').innerHTML = lowStock();
document.getElementById('discounted').innerHTML = discounted();

function lowStock() {
    var i = 0;
    for (name in products) {
        if ((products[name].stock) < 10) {
            i++;
        }
    }
    return i;
}
function discounted() {
    var i = 0;
    for (name in products) {
        if ((products[name].discount) > 0) {
            i++;
        }
    }
    return i;
}