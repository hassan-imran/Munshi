

var products, stores;
if (!(localStorage.products && localStorage.stores) || (localStorage.products == null || localStorage.stores == null)) {
    firebase.database().ref("products/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.products = JSON.stringify(snapshot.val());
        products = JSON.parse(localStorage.products);
    });
    firebase.database().ref("stores/" + localStorage.token).once('value').then((snapshot) => {
        localStorage.stores = JSON.stringify(snapshot.val());
        stores = JSON.parse(localStorage.stores);
    }).then(()=>{window.location.reload(false);});
}
else {
    document.getElementsByTagName("body")[0].style.display = "block";
    products = JSON.parse(localStorage.products);
    stores = JSON.parse(localStorage.stores);
}

