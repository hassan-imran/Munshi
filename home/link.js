

var products, stores;
if (!(localStorage.products && localStorage.stores)) {
    firebase.database().ref("products/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.products = JSON.stringify(snapshot.val());
        products = JSON.parse(localStorage.products);
    });
    firebase.database().ref("stores/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.stores = JSON.stringify(snapshot.val());
        stores = JSON.parse(localStorage.stores);
    });
}
else {
    products = JSON.parse(localStorage.products);
    stores = JSON.parse(localStorage.stores);
}

